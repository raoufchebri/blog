import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Function to get article content from markdown files
async function getArticleContent(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  // Check if the file exists
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
    }
  } catch (error) {
    // If the file doesn't exist, return null
    return null
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleContent(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/#articles" className="inline-flex items-center text-sm hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-sm text-muted-foreground">{article.date}</p>
        </header>

        <div className="prose prose-stone max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>

      <footer className="mt-16 pt-8 border-t text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Raouf Chebri. All rights reserved.</p>
      </footer>
    </div>
  )
}
