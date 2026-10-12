export interface PlatformInfo {
  id: string;
  slug: string; // e.g. 'youtube-downloader'
  name: string;
  category: 'Video' | 'Social' | 'Audio' | 'Live & Gaming' | 'Community';
  supportedTypes: string;
  maxQuality: string;
  watermarkFree?: boolean;
  sampleUrl: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  accentHex: string;
  highlights: string[];
}

export const SUPPORTED_PLATFORMS: PlatformInfo[] = [
  {
    id: 'youtube',
    slug: 'youtube-downloader',
    name: 'YouTube',
    category: 'Video',
    supportedTypes: 'Videos · Shorts · Playlists · Live Replays',
    maxQuality: '4K 2160p 60fps · MP3 320kbps',
    sampleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    seoTitle: 'YouTube Video & Shorts Downloader (4K MP4, WebM, MP3) – VeloFetch',
    seoDescription:
      'Download YouTube videos, Shorts, playlists, and live replays in 4K 2160p, 1080p Full HD MP4, WebM, or 320kbps MP3 audio with subtitles for free.',
    heroHeadline: 'YouTube Video, Shorts & Playlist Downloader',
    heroSubtitle:
      'Extract 4K 60fps MP4/WebM streams, convert lectures and music to 320kbps MP3 or lossless WAV, and save multi-language SRT subtitles.',
    accentHex: '#DC2626',
    highlights: [
      'Full 4K (2160p) and 2K (1440p) AV1/VP9 video stream muxing',
      'Batch playlist parsing with individual episode selection',
      'Multi-language Closed Captions (.srt & .vtt) and max-res cover extraction',
    ],
  },
  {
    id: 'tiktok',
    slug: 'tiktok-downloader',
    name: 'TikTok',
    category: 'Social',
    supportedTypes: 'Videos · No Watermark · Original Audio',
    maxQuality: '1080p HD (No Watermark)',
    watermarkFree: true,
    sampleUrl: 'https://www.tiktok.com/@nordic_cinema_lab/video/7349182910482',
    seoTitle: 'TikTok Video Downloader Without Watermark (HD MP4 & MP3) – VeloFetch',
    seoDescription:
      'Save TikTok videos without watermark in original 1080p Full HD MP4 quality or extract viral TikTok audio tracks in MP3 format instantaneously.',
    heroHeadline: 'TikTok Downloader Without Watermark',
    heroSubtitle:
      'Save clean, uncropped 1080p MP4 videos from TikTok without floating username watermarks, or isolate original audio stems in MP3.',
    accentHex: '#0F172A',
    highlights: [
      'Clean source stream extraction with zero watermark overlay',
      'Option to download either watermark-free or original watermarked MP4',
      'Direct MP3 and M4A original sound extraction',
    ],
  },
  {
    id: 'instagram',
    slug: 'instagram-downloader',
    name: 'Instagram',
    category: 'Social',
    supportedTypes: 'Reels · Posts · Stories · IGTV',
    maxQuality: '1080p Full HD · Carousel Multi-Item',
    sampleUrl: 'https://www.instagram.com/reel/C8x9LmNopQr/',
    seoTitle: 'Instagram Reels, Story, Post & IGTV Downloader – VeloFetch',
    seoDescription:
      'Download public Instagram Reels, multi-slide carousel posts, Stories, and IGTV videos in original 1080p MP4 quality directly to your device.',
    heroHeadline: 'Instagram Reels, Stories & Post Downloader',
    heroSubtitle:
      'Download public Instagram Reels, multi-item carousel posts, Stories, and long-form IGTV broadcasts in uncompromised 1080p MP4.',
    accentHex: '#E11D48',
    highlights: [
      'Full support for Reels, public Stories, Carousels, and IGTV links',
      'Preserves original 1080p vertical bitrate and AAC stereo audio',
      'Instant high-resolution cover frame download',
    ],
  },
  {
    id: 'facebook',
    slug: 'facebook-downloader',
    name: 'Facebook',
    category: 'Social',
    supportedTypes: 'Videos · Watch · Reels · Live',
    maxQuality: '1080p Full HD · 4K UHD',
    sampleUrl: 'https://www.facebook.com/watch/?v=1092837465102',
    seoTitle: 'Facebook Video, Watch & Reels Downloader (1080p HD MP4) – VeloFetch',
    seoDescription:
      'Download public Facebook Watch videos, Reels, and recorded livestreams in 1080p Full HD MP4 or convert Facebook videos to MP3 audio.',
    heroHeadline: 'Facebook Video, Watch & Reels Downloader',
    heroSubtitle:
      'Save public Facebook videos, Watch episodes, and Facebook Reels in 1080p HD MP4 with merged DASH audio streams.',
    accentHex: '#2563EB',
    highlights: [
      'Automatic DASH video + audio stream merging via ffmpeg',
      'Supports fb.watch shortlinks and standard Facebook video URLs',
      'Extract clean audio tracks for podcasts and interviews',
    ],
  },
  {
    id: 'twitter',
    slug: 'twitter-downloader',
    name: 'Twitter / X',
    category: 'Social',
    supportedTypes: 'Post Videos · GIFs · Broadcasts',
    maxQuality: '1080p Full HD MP4',
    sampleUrl: 'https://x.com/cinema_archive/status/1829384756102938',
    seoTitle: 'Twitter / X Video & GIF Downloader (1080p MP4) – VeloFetch',
    seoDescription:
      'Download videos and animated GIFs from X (formerly Twitter) posts in 1080p, 720p, and 480p MP4 format with one paste.',
    heroHeadline: 'Twitter / X Video & GIF Downloader',
    heroSubtitle:
      'Convert X (Twitter) post videos and looping GIFs into standard MP4 files ready for offline viewing on any device.',
    accentHex: '#0F172A',
    highlights: [
      'Works with both x.com and legacy twitter.com status links',
      'Converts Twitter looping media into universal H.264 MP4 files',
      'Select from multiple bitrate tiers (1080p, 720p, 480p)',
    ],
  },
  {
    id: 'threads',
    slug: 'threads-downloader',
    name: 'Threads',
    category: 'Social',
    supportedTypes: 'Thread Videos · Voice Posts · Carousels',
    maxQuality: '1080p HD MP4',
    sampleUrl: 'https://www.threads.net/@design_digest/post/C9kLmNoPqRs',
    seoTitle: 'Threads Video & Voice Post Downloader – VeloFetch',
    seoDescription:
      'Download public videos, multi-clip posts, and voice notes from Meta Threads in original 1080p MP4 or MP3 audio.',
    heroHeadline: 'Meta Threads Video & Audio Downloader',
    heroSubtitle:
      'Save public video clips and voice posts shared on Threads in original resolution with zero compression.',
    accentHex: '#18181B',
    highlights: [
      'Direct CDN stream resolution for Threads video posts',
      'Supports voice thread extraction to MP3/M4A',
      'Zero login or account connection required',
    ],
  },
  {
    id: 'snapchat',
    slug: 'snapchat-downloader',
    name: 'Snapchat',
    category: 'Social',
    supportedTypes: 'Spotlight · Public Stories',
    maxQuality: '1080p Vertical MP4',
    sampleUrl: 'https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAY',
    seoTitle: 'Snapchat Spotlight & Public Story Downloader – VeloFetch',
    seoDescription:
      'Download Snapchat Spotlight videos and public Creator Stories in HD MP4 without watermarks.',
    heroHeadline: 'Snapchat Spotlight Video Downloader',
    heroSubtitle:
      'Download viral Snapchat Spotlight clips and public stories in crisp vertical 1080p MP4.',
    accentHex: '#CA8A04',
    highlights: [
      'Instant extraction from Snapchat Spotlight share links',
      'Maintains vertical 9:16 aspect ratio and stereo audio',
      'Works across mobile Safari, Chrome, and desktop browsers',
    ],
  },
  {
    id: 'pinterest',
    slug: 'pinterest-downloader',
    name: 'Pinterest',
    category: 'Social',
    supportedTypes: 'Video Pins · Idea Pins · Story Pins',
    maxQuality: '1080p HD MP4',
    sampleUrl: 'https://www.pinterest.com/pin/492837465918273645/',
    seoTitle: 'Pinterest Video & Idea Pin Downloader (MP4 HD) – VeloFetch',
    seoDescription:
      'Save Pinterest Video Pins, Idea Pins, and animated clips in high-definition MP4 format with a single click.',
    heroHeadline: 'Pinterest Video & Idea Pin Downloader',
    heroSubtitle:
      'Extract inspiring Pinterest Video Pins and multi-page Idea Pins as clean MP4 files for moodboards and offline reference.',
    accentHex: '#DC2626',
    highlights: [
      'Supports both standard pinterest.com/pin/ and pin.it short URLs',
      'Converts HLS m3u8 Pinterest streams into standalone MP4 files',
      'High-resolution pin cover image download included',
    ],
  },
  {
    id: 'reddit',
    slug: 'reddit-downloader',
    name: 'Reddit',
    category: 'Community',
    supportedTypes: 'v.redd.it Videos · Audio Muxing · GIFs',
    maxQuality: '1080p HD MP4 with Audio',
    sampleUrl: 'https://www.reddit.com/r/cinematography/comments/1a2b3c4/nordic_drone_reel/',
    seoTitle: 'Reddit Video Downloader With Sound (v.redd.it to MP4) – VeloFetch',
    seoDescription:
      'Download Reddit videos with audio automatically merged. Supports v.redd.it links, subreddit posts, and redd.it shortlinks in 1080p MP4.',
    heroHeadline: 'Reddit Video Downloader with Audio',
    heroSubtitle:
      'Automatically combine separate v.redd.it video and audio tracks into a single synchronized 1080p MP4 file.',
    accentHex: '#EA580C',
    highlights: [
      'Solves missing sound by muxing Reddit DASH audio and video streams',
      'Supports full reddit.com post URLs and redd.it shortlinks',
      'Preserves 60fps gameplay and cinematography uploads',
    ],
  },
  {
    id: 'linkedin',
    slug: 'linkedin-downloader',
    name: 'LinkedIn',
    category: 'Social',
    supportedTypes: 'Native Post Videos · Event Replays',
    maxQuality: '1080p Full HD MP4',
    sampleUrl: 'https://www.linkedin.com/posts/studio-engineering_keynote-2026-activity-7192837465/',
    seoTitle: 'LinkedIn Video Downloader (1080p MP4 & Transcripts) – VeloFetch',
    seoDescription:
      'Save native LinkedIn post videos, company announcements, and conference clips in 1080p MP4 or extract audio for offline listening.',
    heroHeadline: 'LinkedIn Native Video Downloader',
    heroSubtitle:
      'Archive public LinkedIn keynote videos, product demos, and industry talks in 1080p MP4 or MP3 audio.',
    accentHex: '#0284C7',
    highlights: [
      'Extracts highest-bitrate progressive MP4 from public LinkedIn posts',
      'Supports caption/subtitle extraction for professional talks',
      'Fast audio conversion for listening on the go',
    ],
  },
  {
    id: 'tumblr',
    slug: 'tumblr-downloader',
    name: 'Tumblr',
    category: 'Community',
    supportedTypes: 'Video Posts · Audio Posts · GIF Sets',
    maxQuality: '1080p MP4 · MP3 Audio',
    sampleUrl: 'https://cinema-studies.tumblr.com/post/741928374650/modular-synth-session',
    seoTitle: 'Tumblr Video & Audio Post Downloader – VeloFetch',
    seoDescription:
      'Download native Tumblr video posts and audio tracks in original MP4 and MP3 quality.',
    heroHeadline: 'Tumblr Video & Audio Downloader',
    heroSubtitle:
      'Save native video uploads and indie audio posts from any public Tumblr blog in seconds.',
    accentHex: '#1E293B',
    highlights: [
      'Supports custom Tumblr blog domains and standard tumblr.com URLs',
      'Direct extraction of native Tumblr audio player streams',
      'Zero re-encoding quality loss',
    ],
  },
  {
    id: 'vimeo',
    slug: 'vimeo-downloader',
    name: 'Vimeo',
    category: 'Video',
    supportedTypes: '4K Staff Picks · Showreels · Master Files',
    maxQuality: '4K 2160p UHD · Lossless Audio',
    sampleUrl: 'https://vimeo.com/76979871',
    seoTitle: 'Vimeo 4K Video Downloader (2160p, 1080p MP4 & Audio) – VeloFetch',
    seoDescription:
      'Download public Vimeo videos, filmmaker showreels, and Staff Picks in up to 4K 2160p UHD MP4, WebM, or uncompressed WAV audio.',
    heroHeadline: 'Vimeo 4K & Showreel Downloader',
    heroSubtitle:
      'Built for filmmakers and creatives: fetch high-bitrate 4K 2160p and 1080p progressive streams from public Vimeo links.',
    accentHex: '#0284C7',
    highlights: [
      'Supports high-bitrate 4K UHD and 2K QHD Vimeo streams',
      'Extracts multi-track subtitles and high-res video stills',
      'Clean progressive MP4 output compatible with NLE editors',
    ],
  },
  {
    id: 'dailymotion',
    slug: 'dailymotion-downloader',
    name: 'Dailymotion',
    category: 'Video',
    supportedTypes: 'HD Videos · News Clips · Documentaries',
    maxQuality: '1080p Full HD · 4K',
    sampleUrl: 'https://www.dailymotion.com/video/x8p9q2r',
    seoTitle: 'Dailymotion Video Downloader (1080p Full HD MP4) – VeloFetch',
    seoDescription:
      'Download Dailymotion videos in 1080p, 720p, and 480p MP4 or convert to MP3 audio online for free.',
    heroHeadline: 'Dailymotion HD Video Downloader',
    heroSubtitle:
      'Save documentaries, sports highlights, and international broadcasts from Dailymotion in Full HD MP4.',
    accentHex: '#0F172A',
    highlights: [
      'Supports dailymotion.com/video/ and dai.ly shortlinks',
      'Reassembles HLS segmented streams into a single MP4 container',
      'Includes subtitle and thumbnail extraction',
    ],
  },
  {
    id: 'twitch',
    slug: 'twitch-downloader',
    name: 'Twitch',
    category: 'Live & Gaming',
    supportedTypes: 'Clips · Past Broadcasts (VODs) · Highlights',
    maxQuality: '1080p 60fps Source MP4',
    sampleUrl: 'https://clips.twitch.tv/AstuteCleanClipExample',
    seoTitle: 'Twitch Clip & VOD Downloader (1080p 60fps MP4) – VeloFetch',
    seoDescription:
      'Download Twitch Clips, Highlights, and past broadcast VODs in crisp 1080p 60fps source quality.',
    heroHeadline: 'Twitch Clips & VOD Downloader',
    heroSubtitle:
      'Capture 1080p 60fps gaming highlights, esports clips, and full VOD segments directly from Twitch.',
    accentHex: '#7C3AED',
    highlights: [
      'True 60fps source stream preservation for smooth editing',
      'Works with clips.twitch.tv and twitch.tv/*/clip/* URLs',
      'Option to extract audio-only MP3 from long talk streams',
    ],
  },
  {
    id: 'rumble',
    slug: 'rumble-downloader',
    name: 'Rumble',
    category: 'Video',
    supportedTypes: 'Videos · Podcasts · Live Archives',
    maxQuality: '1080p Full HD · 4K',
    sampleUrl: 'https://rumble.com/v4x9k2l-documentary-showcase.html',
    seoTitle: 'Rumble Video & Podcast Downloader (1080p MP4 & MP3) – VeloFetch',
    seoDescription:
      'Download Rumble videos and long-form podcasts in 1080p MP4 or convert to compact MP3 audio files.',
    heroHeadline: 'Rumble Video & Podcast Downloader',
    heroSubtitle:
      'Download independent videos and long-form broadcasts from Rumble in 1080p MP4 or audio-only formats.',
    accentHex: '#16A34A',
    highlights: [
      'Direct MP4 stream extraction from Rumble pages',
      'Fast MP3 conversion for 2+ hour podcast episodes',
      'Full resolution selector from 144p data-saver to 1080p HD',
    ],
  },
  {
    id: 'odysee',
    slug: 'odysee-downloader',
    name: 'Odysee',
    category: 'Video',
    supportedTypes: 'LBRY Videos · Tech Channels · Documentaries',
    maxQuality: '1080p Full HD MP4',
    sampleUrl: 'https://odysee.com/@linux_studio:4/kernel-architecture-overview:a',
    seoTitle: 'Odysee Video Downloader (MP4 & MP3) – VeloFetch',
    seoDescription:
      'Download public videos and audio from Odysee (LBRY) in 1080p MP4, WebM, or MP3.',
    heroHeadline: 'Odysee & LBRY Video Downloader',
    heroSubtitle:
      'Fetch decentralized video uploads from Odysee in standard MP4 and MP3 formats.',
    accentHex: '#E11D48',
    highlights: [
      'Resolves LBRY claim URLs on odysee.com automatically',
      'Provides clean MP4 and audio-only download options',
      'Preserves original uploader metadata and cover art',
    ],
  },
  {
    id: 'bilibili',
    slug: 'bilibili-downloader',
    name: 'Bilibili',
    category: 'Video',
    supportedTypes: 'Videos (BV/AV) · Anime Clips · Tutorials',
    maxQuality: '1080p60 · 4K UHD',
    sampleUrl: 'https://www.bilibili.com/video/BV1xx411c7mD',
    seoTitle: 'Bilibili Video Downloader (1080p HD MP4 & Subtitles) – VeloFetch',
    seoDescription:
      'Download Bilibili videos (BV IDs and b23.tv links) with merged audio and subtitles in 1080p MP4.',
    heroHeadline: 'Bilibili HD Video & Audio Downloader',
    heroSubtitle:
      'Download Bilibili BV videos and b23.tv shortlinks with automatically merged audio and subtitle tracks.',
    accentHex: '#0284C7',
    highlights: [
      'Supports BV IDs, AV links, and b23.tv mobile share links',
      'Merges separate Bilibili DASH video and audio streams seamlessly',
      'Multi-part anthology and playlist item selection',
    ],
  },
  {
    id: 'likee',
    slug: 'likee-downloader',
    name: 'Likee',
    category: 'Social',
    supportedTypes: 'Short Videos · No Watermark',
    maxQuality: '1080p HD (No Watermark)',
    watermarkFree: true,
    sampleUrl: 'https://likee.video/@visual_arts/video/7291837465192',
    seoTitle: 'Likee Video Downloader Without Watermark – VeloFetch',
    seoDescription:
      'Download Likee short videos without watermark in HD MP4 format for free.',
    heroHeadline: 'Likee Downloader Without Watermark',
    heroSubtitle:
      'Save clean Likee short videos in original vertical HD resolution without watermarks.',
    accentHex: '#DB2777',
    highlights: [
      'Watermark-free source MP4 extraction',
      'Supports l.likee.video mobile share URLs',
      'One-click audio extraction to MP3',
    ],
  },
  {
    id: 'kwai',
    slug: 'kwai-downloader',
    name: 'Kwai',
    category: 'Social',
    supportedTypes: 'Short Clips · No Watermark',
    maxQuality: '1080p HD (No Watermark)',
    watermarkFree: true,
    sampleUrl: 'https://www.kwai.com/@creative_lens/video/52192837465',
    seoTitle: 'Kwai Video Downloader Without Watermark (HD MP4) – VeloFetch',
    seoDescription:
      'Download Kwai videos without watermark in Full HD MP4 quality on mobile or desktop.',
    heroHeadline: 'Kwai Video Downloader Without Watermark',
    heroSubtitle:
      'Fetch original unwatermarked MP4 streams from Kwai share links in seconds.',
    accentHex: '#EA580C',
    highlights: [
      'Removes Kwai ending and corner watermarks automatically',
      'Supports kwai.com and kw.ai shortlinks',
      'Fast mobile-friendly MP4 download',
    ],
  },
  {
    id: 'douyin',
    slug: 'douyin-downloader',
    name: 'Douyin',
    category: 'Social',
    supportedTypes: 'HD Short Videos · No Watermark · Original Sound',
    maxQuality: '1080p 60fps (No Watermark)',
    watermarkFree: true,
    sampleUrl: 'https://www.douyin.com/video/7319283746591827',
    seoTitle: 'Douyin Video Downloader Without Watermark (1080p HD) – VeloFetch',
    seoDescription:
      'Download Douyin (Chinese TikTok) videos without watermark in 1080p 60fps MP4 or extract original audio.',
    heroHeadline: 'Douyin Downloader Without Watermark',
    heroSubtitle:
      'Extract high-bitrate 1080p unwatermarked videos and original soundtracks from Douyin links.',
    accentHex: '#0F172A',
    highlights: [
      'Supports v.douyin.com short share links and full desktop URLs',
      'Clean unwatermarked H.264/HEVC stream output',
      'Original soundtrack extraction in 320kbps MP3',
    ],
  },
  {
    id: 'vk',
    slug: 'vk-downloader',
    name: 'VK',
    category: 'Social',
    supportedTypes: 'VK Video · Clips · Live Archives',
    maxQuality: '1080p · 4K UHD MP4',
    sampleUrl: 'https://vk.com/video-21938475_456239017',
    seoTitle: 'VK Video Downloader (1080p, 4K MP4 & MP3) – VeloFetch',
    seoDescription:
      'Download public videos and clips from VK (VKontakte / VK Video) in 1080p, 720p, or 4K MP4 format.',
    heroHeadline: 'VK Video & Clip Downloader',
    heroSubtitle:
      'Download public VK Video uploads and community clips in Full HD and 4K MP4.',
    accentHex: '#2563EB',
    highlights: [
      'Supports vk.com/video and vkvideo.ru URLs',
      'Full resolution ladder from 240p to 4K 2160p',
      'Fast progressive stream delivery',
    ],
  },
  {
    id: 'okru',
    slug: 'okru-downloader',
    name: 'OK.ru',
    category: 'Video',
    supportedTypes: 'Movies · Classic Archives · Clips',
    maxQuality: '1080p Full HD MP4',
    sampleUrl: 'https://ok.ru/video/1928374659182',
    seoTitle: 'OK.ru (Odnoklassniki) Video Downloader – VeloFetch',
    seoDescription:
      'Download public OK.ru videos in 1080p, 720p, 480p, and 360p MP4 format directly to your computer or phone.',
    heroHeadline: 'OK.ru Video Downloader',
    heroSubtitle:
      'Extract public video archives and broadcasts from Odnoklassniki (OK.ru) in clean MP4 quality.',
    accentHex: '#EA580C',
    highlights: [
      'Supports ok.ru/video/ and embedded player links',
      'Multiple quality tiers for large long-form videos',
      'Reliable resume-capable HTTP streaming',
    ],
  },
  {
    id: 'telegram',
    slug: 'telegram-downloader',
    name: 'Telegram',
    category: 'Community',
    supportedTypes: 'Public Channel Videos · Voice & Audio Files',
    maxQuality: 'Original Uploaded Quality',
    sampleUrl: 'https://t.me/nature_documentaries/1428',
    seoTitle: 'Telegram Public Post Video Downloader – VeloFetch',
    seoDescription:
      'Download videos and audio files from public Telegram channel posts (t.me links) directly in your web browser.',
    heroHeadline: 'Telegram Public Channel Media Downloader',
    heroSubtitle:
      'Paste any public t.me/channel/post link to download embedded videos and audio without opening the Telegram client.',
    accentHex: '#0284C7',
    highlights: [
      'Works with public t.me/<channel>/<message_id> URLs',
      'Preserves original uncompressed file uploaded to the channel',
      'No Telegram account login required for public posts',
    ],
  },
  {
    id: 'streamable',
    slug: 'streamable-downloader',
    name: 'Streamable',
    category: 'Video',
    supportedTypes: 'Sports Highlights · Gameplay Clips · MP4',
    maxQuality: '1080p 60fps MP4',
    sampleUrl: 'https://streamable.com/e8x9k2',
    seoTitle: 'Streamable Video Downloader (1080p 60fps MP4) – VeloFetch',
    seoDescription:
      'Download Streamable video clips and sports highlights in original 1080p 60fps MP4 quality.',
    heroHeadline: 'Streamable Clip Downloader',
    heroSubtitle:
      'Save sports highlights, gaming clips, and quick shares hosted on Streamable before they expire.',
    accentHex: '#2563EB',
    highlights: [
      'Instant direct CDN MP4 resolution',
      'Preserves 60fps frame rate on gaming and sports clips',
      'One-click thumbnail and audio extraction',
    ],
  },
  {
    id: 'imgur',
    slug: 'imgur-downloader',
    name: 'Imgur',
    category: 'Community',
    supportedTypes: 'GIFV · MP4 Loops · Galleries with Sound',
    maxQuality: '1080p MP4',
    sampleUrl: 'https://imgur.com/gallery/cinematic-timelapse-x9k2LmN',
    seoTitle: 'Imgur Video & GIFV Downloader With Sound – VeloFetch',
    seoDescription:
      'Download Imgur GIFV animations and video galleries with sound as standard MP4 files.',
    heroHeadline: 'Imgur Video & GIFV Downloader',
    heroSubtitle:
      'Convert Imgur .gifv links and multi-item galleries into universal MP4 videos with audio intact.',
    accentHex: '#16A34A',
    highlights: [
      'Supports single imgur.com posts and multi-item /a/ or /gallery/ links',
      'Keeps embedded audio tracks on Imgur video posts',
      'Lightweight MP4 output for easy sharing',
    ],
  },
  {
    id: '9gag',
    slug: '9gag-downloader',
    name: '9GAG',
    category: 'Community',
    supportedTypes: 'Video Memes · Clips with Audio',
    maxQuality: '1080p HD MP4',
    sampleUrl: 'https://9gag.com/gag/a1B2c3D',
    seoTitle: '9GAG Video Downloader With Sound (MP4) – VeloFetch',
    seoDescription:
      'Download 9GAG videos and animated posts with sound in clean MP4 format without watermarks.',
    heroHeadline: '9GAG Video Downloader',
    heroSubtitle:
      'Save viral 9GAG video posts with full audio in universal H.264 MP4 format.',
    accentHex: '#0F172A',
    highlights: [
      'Resolves both VP9 WebM and H.264 MP4 streams from 9GAG',
      'Includes audio track automatically',
      'Works on mobile and desktop browsers',
    ],
  },
  {
    id: 'flickr',
    slug: 'flickr-downloader',
    name: 'Flickr',
    category: 'Community',
    supportedTypes: 'HD Photography Showcases · Camera Test Videos',
    maxQuality: '1080p Full HD MP4',
    sampleUrl: 'https://www.flickr.com/photos/nordic_lens/53192837465/',
    seoTitle: 'Flickr Video & High-Res Media Downloader – VeloFetch',
    seoDescription:
      'Download public videos and high-resolution showcases hosted on Flickr in original MP4 quality.',
    heroHeadline: 'Flickr Video Downloader',
    heroSubtitle:
      'Download public camera tests, timelapses, and photography videos hosted on Flickr.',
    accentHex: '#DB2777',
    highlights: [
      'Extracts original uploaded video stream from public Flickr photostreams',
      'Full EXIF/metadata title preservation',
      'Max-resolution still frame extraction',
    ],
  },
  {
    id: 'bluesky',
    slug: 'bluesky-downloader',
    name: 'Bluesky',
    category: 'Social',
    supportedTypes: 'Social Video Posts · Clips',
    maxQuality: '1080p HD MP4',
    sampleUrl: 'https://bsky.app/profile/visuals.bsky.social/post/3k9x2lmnop',
    seoTitle: 'Bluesky (bsky.app) Video Downloader – VeloFetch',
    seoDescription:
      'Download videos from public Bluesky (bsky.app) posts as clean MP4 files from HLS playlists.',
    heroHeadline: 'Bluesky Video Downloader',
    heroSubtitle:
      'Convert Bluesky AT-Protocol HLS video streams into standalone MP4 files with a single paste.',
    accentHex: '#0284C7',
    highlights: [
      'Automatically converts Bluesky .m3u8 streams into MP4',
      'Preserves subtitles/captions attached to Bluesky videos',
      'Supports all public bsky.app post links',
    ],
  },
  {
    id: 'soundcloud',
    slug: 'soundcloud-downloader',
    name: 'SoundCloud',
    category: 'Audio',
    supportedTypes: 'Tracks · DJ Sets · Playlists · Cover Art',
    maxQuality: 'MP3 320kbps · Lossless WAV · M4A',
    sampleUrl: 'https://soundcloud.com/klangwerk-berlin/modular-tape-session-04',
    seoTitle: 'SoundCloud to MP3 & WAV Downloader (320kbps & Sets) – VeloFetch',
    seoDescription:
      'Download SoundCloud tracks, remixes, DJ sets, and playlists in 320kbps MP3, M4A, or lossless WAV with artwork.',
    heroHeadline: 'SoundCloud Track & Playlist Downloader',
    heroSubtitle:
      'Convert public SoundCloud tracks, indie releases, and full playlists into 320kbps MP3, M4A, or WAV with high-res cover art.',
    accentHex: '#EA580C',
    highlights: [
      'Supports individual tracks and multi-track SoundCloud sets/playlists',
      'Choose between 320kbps MP3, AAC M4A, or uncompressed WAV',
      'Download 1000×1000 original track artwork',
    ],
  },
  {
    id: 'bandcamp',
    slug: 'bandcamp-downloader',
    name: 'Bandcamp',
    category: 'Audio',
    supportedTypes: 'Public Streams · Singles · Album Previews',
    maxQuality: 'MP3 320kbps · WAV · M4A',
    sampleUrl: 'https://klangwerk.bandcamp.com/track/analog-horizon',
    seoTitle: 'Bandcamp Audio & Album Preview Downloader (MP3/WAV) – VeloFetch',
    seoDescription:
      'Download public Bandcamp track streams and album previews in MP3, M4A, or WAV format.',
    heroHeadline: 'Bandcamp Track & Album Stream Downloader',
    heroSubtitle:
      'Save public Bandcamp preview streams and free/Creative Commons releases in MP3 or WAV.',
    accentHex: '#0284C7',
    highlights: [
      'Supports both single /track/ links and multi-track /album/ pages',
      'Batch tracklist selector for full albums',
      'High-resolution album cover download',
    ],
  },
  {
    id: 'mixcloud',
    slug: 'mixcloud-downloader',
    name: 'Mixcloud',
    category: 'Audio',
    supportedTypes: 'DJ Mixes · Radio Shows · Long-Form Sets',
    maxQuality: 'MP3 320kbps · M4A AAC',
    sampleUrl: 'https://www.mixcloud.com/berlin_radio/late-night-ambient-transmission-42/',
    seoTitle: 'Mixcloud DJ Mix & Radio Show Downloader (MP3 & M4A) – VeloFetch',
    seoDescription:
      'Download Mixcloud DJ mixes, radio broadcasts, and podcasts as MP3 or M4A audio files for offline listening.',
    heroHeadline: 'Mixcloud DJ Set & Radio Downloader',
    heroSubtitle:
      'Save 1-to-4 hour DJ mixes and radio shows from Mixcloud as single continuous MP3 or M4A files.',
    accentHex: '#4F46E5',
    highlights: [
      'Seamless HLS audio segment stitching for multi-hour sets',
      'Outputs clean M4A or 320kbps MP3 with show metadata',
      'Fast server-side buffering with progress feedback',
    ],
  },
  {
    id: 'spotify',
    slug: 'spotify-podcast-downloader',
    name: 'Spotify Podcasts',
    category: 'Audio',
    supportedTypes: 'Public Podcast Episodes · Video Podcasts (Where Supported)',
    maxQuality: 'MP3 320kbps · M4A · 1080p Video',
    sampleUrl: 'https://open.spotify.com/episode/4x9kLmNoPqRsTuVwXyZ123',
    seoTitle: 'Spotify Podcast Episode Downloader (MP3 & Video) – VeloFetch',
    seoDescription:
      'Download public, DRM-free Spotify podcast episodes and RSS-backed shows in MP3 or M4A format for offline listening.',
    heroHeadline: 'Spotify Podcast Episode Downloader',
    heroSubtitle:
      'Download public, non-DRM podcast episodes and RSS-syndicated talk shows in MP3 or M4A for offline listening.',
    accentHex: '#16A34A',
    highlights: [
      'Supports open.spotify.com/episode/ public non-DRM podcast streams',
      'Clean voice-optimized 128kbps or studio 320kbps MP3 options',
      'Extracts episode show notes and cover art',
    ],
  },
  {
    id: 'ytdlp-1000',
    slug: 'supported-sites',
    name: '1,000+ yt-dlp Sites',
    category: 'Video',
    supportedTypes: 'Archive.org · TED · Coursera · PeerTube · Mastodon · BBC · CNN & 1,000+ More',
    maxQuality: 'Up to 4K 2160p · Lossless Audio',
    sampleUrl: 'https://www.ted.com/talks/example_architectural_acoustics',
    seoTitle: '1,000+ Supported Video & Audio Sites (yt-dlp Engine) – VeloFetch',
    seoDescription:
      'VeloFetch supports over 1,000 video, audio, educational, and social platforms powered by the open-source yt-dlp and ffmpeg extraction engine.',
    heroHeadline: '1,000+ Supported Platforms via yt-dlp Engine',
    heroSubtitle:
      'Beyond major social networks, VeloFetch extracts public streams from TED, Internet Archive, PeerTube, Mastodon, Loom, Coub, and 1,000+ extractors.',
    accentHex: '#2563EB',
    highlights: [
      'Powered by continuously updated yt-dlp extractors and ffmpeg muxing',
      'Automatic HLS (.m3u8) and MPEG-DASH (.mpd) manifest parsing',
      'Universal fallback for direct MP4, WebM, and MP3 links',
    ],
  },
];

export const EXTENDED_YTDLP_SITES: string[] = [
  'Internet Archive (archive.org)',
  'TED Talks (ted.com)',
  'PeerTube Instances',
  'Mastodon Federated Video',
  'Loom Screen Recordings',
  'Coub Loops',
  'BitChute',
  'Nebula (Public Trailers)',
  'Wikimedia Commons',
  'NASA Video Gallery',
  'C-SPAN Archives',
  'PBS Public Broadcasts',
  'Arte.tv',
  'Audiomack',
  'Hearthis.at',
  'Newgrounds Audio & Video',
  'itch.io Trailers',
  'GameClips.io',
  'Medal.tv Clips',
  'Kick.com Clips & VODs',
  'Trovo Live Clips',
  'AfreecaTV / SOOP',
  'Niconico Video',
  'Weibo Video',
  'Xiaohongshu (RED)',
  'Naver TV',
  'VLive Archives',
  'Aparat',
  'Rutube',
  'Dzen.ru',
];
