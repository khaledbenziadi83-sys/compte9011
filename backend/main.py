"""
VeloFetch — Alternative Python (FastAPI + yt-dlp + ffmpeg) Backend Service
Run locally with: uvicorn backend.main:app --host 0.0.0.0 --port 8000
"""

import os
import re
import time
import shutil
import tempfile
import asyncio
from pathlib import Path
from urllib.parse import urlparse
from typing import Optional, List

from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, StreamingResponse
from pydantic import BaseModel
import yt_dlp

app = FastAPI(
    title="VeloFetch Media Extraction API",
    version="1.0.0",
    description="High-performance video and audio extraction engine using yt-dlp and ffmpeg."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

TEMP_DIR = Path(tempfile.gettempdir()) / "velofetch_cache"
TEMP_DIR.mkdir(parents=True, exist_ok=True)
FILE_TTL_SECONDS = 600  # Auto-delete temporary files after 10 minutes


class InfoRequest(BaseModel):
    url: str


def sanitize_url(raw_url: str) -> str:
    cleaned = raw_url.strip()
    if not cleaned:
        raise HTTPException(status_code=400, detail="Please enter a media URL.")
    parsed = urlparse(cleaned)
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        raise HTTPException(status_code=400, detail="Invalid URL format. Include http:// or https://.")
    if any(c in cleaned for c in [";", "|", "`", "$", "(", ")"]):
        raise HTTPException(status_code=400, detail="URL contains disallowed characters.")
    return cleaned


def cleanup_expired_files() -> None:
    now = time.time()
    for item in TEMP_DIR.glob("*"):
        try:
            if now - item.stat().st_mtime > FILE_TTL_SECONDS:
                if item.is_file():
                    item.unlink(missing_ok=True)
                elif item.is_dir():
                    shutil.rmtree(item, ignore_errors=True)
        except OSError:
            pass


@app.post("/api/info")
async def fetch_video_info(payload: InfoRequest):
    cleanup_expired_files()
    url = sanitize_url(payload.url)

    ydl_opts = {
        "quiet": True,
        "no_warnings": True,
        "extract_flat": "in_playlist",
        "skip_download": True,
    }

    try:
        loop = asyncio.get_running_loop()
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = await loop.run_in_executor(None, lambda: ydl.extract_info(url, download=False))
    except yt_dlp.utils.DownloadError as exc:
        msg = str(exc).lower()
        if "private" in msg:
            raise HTTPException(status_code=403, detail="This video is private and cannot be accessed.")
        if "geo" in msg or "country" in msg:
            raise HTTPException(status_code=451, detail="This content is geo-restricted in the server region.")
        raise HTTPException(status_code=422, detail="Unsupported site or inaccessible media link.")

    return {
        "id": info.get("id"),
        "title": info.get("title"),
        "uploader": info.get("uploader") or info.get("channel"),
        "duration": info.get("duration"),
        "thumbnail": info.get("thumbnail"),
        "extractor": info.get("extractor_key"),
        "formats": info.get("formats", []),
    }


@app.get("/api/download")
async def download_media(
    url: str = Query(...),
    format_id: str = Query("bestvideo+bestaudio/best"),
    ext: str = Query("mp4"),
):
    cleanup_expired_files()
    clean_url = sanitize_url(url)
    job_id = f"vf_{int(time.time() * 1000)}"
    output_template = str(TEMP_DIR / f"{job_id}.%(ext)s")

    ydl_opts = {
        "format": format_id,
        "outtmpl": output_template,
        "merge_output_format": ext if ext in ("mp4", "webm") else None,
        "quiet": True,
    }

    loop = asyncio.get_running_loop()
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        await loop.run_in_executor(None, lambda: ydl.download([clean_url]))

    matches = list(TEMP_DIR.glob(f"{job_id}.*"))
    if not matches:
        raise HTTPException(status_code=500, detail="Failed to mux output file.")

    target_file = matches[0]
    return FileResponse(
        path=target_file,
        filename=target_file.name,
        media_type="application/octet-stream",
    )
