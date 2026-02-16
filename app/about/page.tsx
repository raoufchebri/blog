import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <header className="mb-20">
        <div className="flex justify-between items-baseline mb-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; Back
          </Link>
          <ThemeToggle />
        </div>
        <h1 className="text-2xl font-semibold mb-4">About</h1>
        <p className="text-muted-foreground leading-relaxed">
          Developer Relations Engineer, AWS Community Builder, and AI Engineer with over a decade of experience building and scaling global developer programs at Microsoft and Neon.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          As a Founding Developer Advocate, I helped grow Neon from zero to nearly a million users, resulting in its $1B acquisition by Databricks.
        </p>
      </header>

      <main className="space-y-20">
        {/* Experience */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Experience</h2>
          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Neon</h3>
                <span className="text-sm text-muted-foreground">2022 &ndash; 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Founding Developer Advocate</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led developer relations efforts that helped scale the platform from zero to nearly 1 million users. Built developer documentation, created technical content, and established community programs that contributed to Neon&apos;s $1B acquisition by Databricks.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">ScyllaDB</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Developer Advocate</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built relationships with the distributed systems and database communities. Created technical content around NoSQL databases, performance optimization, and distributed systems architecture.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Microsoft</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Developer Relations</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Worked on global developer relations programs, helping developers adopt Microsoft technologies and build solutions on the Azure platform.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Projects</h2>
          <div className="space-y-4">
            {[
              { name: "mcp-server-neon", url: "https://github.com/neondatabase-labs/mcp-server-neon", desc: "MCP Server for Neon database integration" },
              { name: "pg_embedding", url: "https://github.com/neondatabase-labs/pg_embedding", desc: "PostgreSQL extension for vector search with HNSW index" },
              { name: "neon_swarm", url: "https://github.com/raoufchebri/neon_swarm", desc: "AI-powered agents for Neon using OpenAI Swarm" },
              { name: "create-branch-action", url: "https://github.com/neondatabase/create-branch-action", desc: "GitHub Action for creating Neon database branches" },
              { name: "neon-examples", url: "https://github.com/neondatabase/examples", desc: "Collection of examples and tutorials for Neon" },
            ].map((project) => (
              <div key={project.name} className="flex items-baseline gap-3">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline shrink-0">
                  {project.name}
                </a>
                <span className="text-sm text-muted-foreground">{project.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Talks */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Talks</h2>
          <div className="space-y-3">
            {[
              { title: "GenAI France 2024", role: "Organizer & Speaker" },
              { title: "AI Engineer World's Fair 2025", role: "Speaker Manager" },
              { title: "AI Engineer Summit NYC 2025", role: "Speaker Manager" },
              { title: "AWS re:Invent 2024", role: "Sponsor" },
              { title: "Next.js Conf 2024", role: "Sponsor" },
              { title: "React Paris 2025", role: "Sponsor" },
              { title: "React Miami 2025", role: "Sponsor" },
            ].map((talk) => (
              <div key={talk.title} className="flex justify-between items-baseline text-sm">
                <span>{talk.title}</span>
                <span className="text-muted-foreground">{talk.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Selected Writing</h2>
          <div className="space-y-3">
            {[
              { title: "Bringing MCP to the Cloud", url: "https://neon.com/blog/bringing-mcp-to-the-cloud" },
              { title: "pgvector: 30x Faster Index Build for your Vector Embeddings", url: "https://neon.com/blog/pgvector-30x-faster-index-build-for-your-vector-embeddings" },
              { title: "Sub-10ms Postgres queries for Vercel Edge Functions", url: "https://neon.com/blog/sub-10ms-postgres-queries-for-vercel-edge-functions" },
              { title: "Don't use vector. Use halvec instead and save 50% of your storage cost", url: "https://neon.com/blog/dont-use-vector-use-halvec-instead-and-save-50-of-your-storage-cost" },
              { title: "20x faster than pgvector: introducing pg_embedding", url: "https://neon.com/blog/pg-embedding-extension-for-vector-search" },
              { title: "RAG With Autoscaling: Better Performance With Lower Costs", url: "https://neon.com/blog/rag-with-autoscaling" },
              { title: "HTTP vs. WebSockets: Which protocol for Postgres at the Edge", url: "https://neon.com/blog/http-vs-websockets-for-postgres-queries-at-the-edge" },
              { title: "Building an AI-powered ChatBot using Vercel, OpenAI, and Postgres", url: "https://neon.com/blog/building-an-ai-powered-chatbot-using-vercel-openai-and-postgres" },
              { title: "ORMs vs. Query Builders for your Typescript application", url: "https://neon.com/blog/orms-vs-query-builders-for-your-typescript-application" },
              { title: "Change Data Capture with Serverless Postgres", url: "https://neon.com/blog/change-data-capture-with-serverless-postgres" },
            ].map((article) => (
              <div key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                  {article.title}
                </a>
              </div>
            ))}
            <p className="text-sm text-muted-foreground mt-4">
              35+ articles published on the <a href="https://neon.com/blog" target="_blank" rel="noopener noreferrer" className="hover:underline">Neon blog</a>.
            </p>
          </div>
        </section>

        {/* Videos */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">Videos</h2>
          <div className="space-y-3">
            {[
              { title: "GenAI France Talk", url: "https://www.youtube.com/watch?v=_d8qy6uH8AE&t=3060" },
              { title: "Developer Days Keynote", url: "https://www.youtube.com/watch?v=A74KeYh19jE" },
              { title: "Neon Launch Event", url: "https://www.youtube.com/watch?v=Bfnt9P4CrjQ" },
              { title: "Building with Neon", url: "https://www.youtube.com/watch?v=WueODGlcT8c" },
              { title: "Vector Search Deep Dive", url: "https://www.youtube.com/watch?v=NI2x1mhB6uI" },
              { title: "Serverless Postgres Tutorial", url: "https://www.youtube.com/watch?v=2LPdwLPHYwk&t=51" },
            ].map((video) => (
              <div key={video.url}>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                  {video.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pb-8">
          <p className="text-sm text-muted-foreground">
            Interested in working together?{" "}
            <a href="mailto:raouf.chebri@gmail.com" className="text-foreground hover:underline">Get in touch</a>.
          </p>
        </section>
      </main>
    </div>
  )
}
