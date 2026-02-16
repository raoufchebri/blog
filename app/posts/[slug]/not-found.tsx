import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 text-center">
      <h2 className="text-2xl font-semibold mb-4">Post Not Found</h2>
      <p className="text-muted-foreground mb-8">The post you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        &larr; Back to home
      </Link>
    </div>
  )
}
