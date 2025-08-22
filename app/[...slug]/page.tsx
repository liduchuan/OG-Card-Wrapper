import { redirect, RedirectType } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const url = slug.map(decodeURIComponent).join('/')
  redirect(url, RedirectType.replace)
}

