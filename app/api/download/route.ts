import { NextRequest, NextResponse } from 'next/server';

interface TikTokVideoData {
  downloadUrl: string;
  title: string;
  thumbnail: string;
}

async function extractTikTokVideo(url: string): Promise<TikTokVideoData> {
  // Validate the URL is a TikTok link
  const tiktokRegex = /^https?:\/\/((?:www|m|vm)\.)?tiktok\.com\/.+/i;
  const shortRegex = /^https?:\/\/vm\.tiktok\.com\/.+/i;

  if (!tiktokRegex.test(url) && !shortRegex.test(url)) {
    throw new Error('Please provide a valid TikTok URL');
  }

  // Use the tikwm.com API to fetch video data without watermark
  const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch video data. Please try again.');
  }

  const data = await response.json();

  if (data.code !== 0 || !data.data) {
    throw new Error('Could not extract video. Please check the URL and try again.');
  }

  const videoData = data.data;

  // Changed: Check if the play URL is already a full URL before prepending the tikwm base
  const playUrl: string = videoData.play || '';
  const downloadUrl = playUrl.startsWith('http')
    ? playUrl
    : `https://www.tikwm.com${playUrl}`;

  return {
    downloadUrl,
    title: videoData.title || 'TikTok Video',
    thumbnail: videoData.cover || videoData.origin_cover || '',
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body as { url?: string };

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please provide a TikTok URL' },
        { status: 400 }
      );
    }

    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid TikTok URL' },
        { status: 400 }
      );
    }

    const videoData = await extractTikTokVideo(trimmedUrl);

    return NextResponse.json({
      success: true,
      downloadUrl: videoData.downloadUrl,
      title: videoData.title,
      thumbnail: videoData.thumbnail,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}