import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
      <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="text-sm font-medium hover:underline">
        Return to homepage
      </Link>
    </div>
  )
}
