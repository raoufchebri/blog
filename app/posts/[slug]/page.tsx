import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { getPostData } from "@/lib/markdown"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post: { id: string; content: string; title?: string; date?: string }
  try {
    post = getPostData(slug) as { id: string; content: string; title?: string; date?: string }
  } catch {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <div className="flex justify-between items-baseline mb-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          &larr; Back
        </Link>
        <ThemeToggle />
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
          {post.date && (
            <p className="text-sm text-muted-foreground">{post.date}</p>
          )}
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
