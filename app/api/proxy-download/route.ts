import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('url');
    const title = searchParams.get('title') || 'tiktok-video';

    if (!videoUrl || typeof videoUrl !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Missing video URL' },
        { status: 400 }
      );
    }

    // Validate the URL points to tikwm.com to prevent open redirect / SSRF
    const parsedUrl = new URL(videoUrl);
    if (!parsedUrl.hostname.endsWith('tikwm.com')) {
      return NextResponse.json(
        { success: false, error: 'Invalid video source' },
        { status: 400 }
      );
    }

    // Fetch the actual video binary from tikwm
    const videoResponse = await fetch(videoUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'video/mp4,video/*;q=0.9,*/*;q=0.8',
        Referer: 'https://www.tikwm.com/',
      },
    });

    if (!videoResponse.ok) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch video from source' },
        { status: 502 }
      );
    }

    const contentType =
      videoResponse.headers.get('content-type') || 'video/mp4';
    const contentLength = videoResponse.headers.get('content-length');

    // Sanitize the title for use as a filename
    const safeTitle = title
      .replace(/[^a-zA-Z0-9_\-\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 100)
      || 'tiktok-video';

    const headers = new Headers({
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${safeTitle}.mp4"`,
      'Cache-Control': 'no-cache',
    });

    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    // Stream the video body through to the client
    return new NextResponse(videoResponse.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Proxy download error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to download video' },
      { status: 500 }
    );
  }
}