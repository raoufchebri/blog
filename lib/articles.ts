// This file would be used in a real app to fetch articles from the file system
// For now, we're using hardcoded data in the page components

export type Article = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getArticles(): Article[] {
  // In a real app, this would fetch from a database or file system
  return [
    {
      slug: "building-a-minimalist-website",
      title: "Building a Minimalist Website with Next.js",
      date: "May 14, 2025",
      excerpt:
        "Learn how to create a clean, minimalist website using Next.js and React with a focus on simplicity and user experience.",
      content: "Full article content here...",
    },
  ]
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getArticles()
  return articles.find((article) => article.slug === slug) || null
}
