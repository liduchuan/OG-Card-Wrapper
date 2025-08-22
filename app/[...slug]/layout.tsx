import * as cheerio from 'cheerio';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params
  const url = slug.map(decodeURIComponent).join('/')
  const response = await fetch(url)
  if (response.ok) {
    const $ = cheerio.load(await response.text());
    const title = $('head > title').first().text().trim() || 'No Title';
    return {
      title: title,
      openGraph: {
        url,
        images: [
          {
            url: '/og.png',
          },
        ],
      }
    }
  } else {
    return {
      title: 'URL Invalid',
    }
  }
}

export default function Page({ children }: PropsWithChildren) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>
}

