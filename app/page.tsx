import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { getSortedPostsData } from "@/lib/markdown"

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <header className="mb-20">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="text-2xl font-semibold">Raouf Chebri</h1>
          <ThemeToggle />
        </div>
        <div className="flex gap-5 mt-6 text-sm">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <a href="mailto:raouf.chebri@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
          <a href="https://github.com/raoufchebri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/raoufchebri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://x.com/raboruf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">X</a>
        </div>
      </header>

      <main>
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Posts</h2>
        <div className="space-y-6">
          {posts.map((post: { id: string; title?: string; date?: string }) => (
            <div key={post.id} className="flex justify-between items-baseline gap-4">
              <Link href={`/posts/${post.id}`} className="text-sm hover:underline">
                {post.title || post.id}
              </Link>
              {post.date && (
                <span className="text-sm text-muted-foreground shrink-0">{post.date}</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
