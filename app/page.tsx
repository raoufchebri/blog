import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Function to get all articles
async function getArticles() {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Create excerpt (first 160 characters of content)
    const excerpt =
      matterResult.content
        .trim()
        .replace(/^#+.*$/gm, "") // Remove headings
        .replace(/\n/g, " ") // Replace newlines with spaces
        .slice(0, 160) + "..."

    // Return the combined data
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt,
    }
  })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export default async function Home() {
  const posts = await getArticles()

  // Projects data
  const projects = [
    {
      id: 1,
      title: "HNTLDR;",
      description: "HNTLDR is an application that provides text and audio summaries and insights from Hacker News.",
      technologies: ["Next.js", "OpenAI", "ElevenLabs", "Lambda"],
      url: "https://www.hntldr.news/",
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
      <header className="mb-16">
        <nav className="flex justify-between items-center mb-16">
          <span className="font-medium text-lg">Raouf Chebri</span>
          <div className="flex gap-4">
            <a href="#about" className="text-sm hover:underline">
              About
            </a>
            <a href="#articles" className="text-sm hover:underline">
              Articles
            </a>
            <a href="#projects" className="text-sm hover:underline">
              Projects
            </a>
            <Link href="/devrel" className="text-sm hover:underline">
              DevRel
            </Link>
          </div>
        </nav>

        <section id="about" className="mb-20">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Raouf Chebri</h1>
            <p className="text-muted-foreground">
              Developer Relations | AI Engineer | AWS Community Builder | MBA.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="https://x.com/_raoufai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <XIcon className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/raoufchebri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/raoufchebri/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:raouf.chebri@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p>
              Hi! I'm Raouf, a Developer Advocate, an AI Engineer and an AWS Community Builder with over a decade of experience building and scaling global Developer Relations programs at Microsoft, ScyllaDB and Neon across AI, cloud, and distributed systems.
            </p>
            <p>
              I like to work in fast moving starups and help them grow. At Neon, I helped the platform grow from zero to nearly a million users, resulting in its $1B acquisition by Databricks. 
            </p>
            <p>
              When I'm not coding, you can find me cycling or skiing.
            </p>
          </div>
        </section>
      </header>

      <main>
        <section id="articles" className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Articles</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="space-y-2">
                <h3 className="text-lg font-medium">
                  <Link href={`/articles/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div>
                  <Link
                    href={`/articles/${post.slug}`}
                    className="text-sm font-medium hover:underline inline-flex items-center"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <article key={project.id} className="space-y-2">
                <h3 className="text-lg font-medium">
                  <a href={project.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="pt-8 border-t text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Raouf Chebri. All rights reserved.</p>
      </footer>
    </div>
  )
}
