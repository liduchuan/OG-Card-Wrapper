import { NextRequest, NextResponse } from 'next/server';

const BOT_RE = /(bot|crawler|spider|facebookexternalhit|linkedinbot|slackbot|discordbot|twitterbot|embedly|quora|pinterest|vkshare|telegrambot|applebot|bingbot|yandex|duckduckbot|baiduspider)/i;

function toTargetFromPath(pathname: string): string | null {
  const segs = pathname.slice(1).split('/').filter(Boolean);
  if (!segs.length) return null;
  const raw = segs.map(decodeURIComponent).join('/');
  return raw
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/' || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const target = toTargetFromPath(pathname);
  if (!target) return NextResponse.next();

  const ua = req.headers.get('user-agent') || '';

  if (BOT_RE.test(ua)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(target, 307);
}

export const config = {
  matcher: '/:path*'
};
