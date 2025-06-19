'use client'

import Link from "next/link"
import { ArrowLeft, Users, MessageSquare, Code, Globe, TrendingUp, Award, BookOpen, X } from "lucide-react"
import { useState } from "react"

export default function DevRelPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Neon Growth",
      description: "Helped scale Neon from zero to nearly 1 million users, contributing to its $1B acquisition by Databricks."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AWS Community Builder",
      description: "Recognized as AI Engineer AWS Community Builder."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Technical Content",
      description: "Published numerous technical articles and tutorials reaching thousands of developers worldwide."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
      <header className="mb-16">
        <nav className="flex justify-between items-center mb-16">
          <Link href="/" className="font-medium text-lg hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="/#articles" className="text-sm hover:underline">
              Articles
            </Link>
            <Link href="/#projects" className="text-sm hover:underline">
              Projects
            </Link>
          </div>
        </nav>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Raouf Chebri</h1>
          <p className="text-xl text-muted-foreground">
            As a Developer Relations Engineer, my mission is to connect with developers and help solve their problems, educate them on the latest technological trends and their trade-offs, and help product and engineering teams build the best developer experience.
          </p>
        </div>
      </header>

      <main className="space-y-20">
        {/* Key Achievements */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-primary mx-auto">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-medium">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-medium">Neon</h3>
              <p className="text-sm text-muted-foreground mb-2">Founding Developer Advocate</p>
              <p className="text-muted-foreground">
                Led developer relations efforts that helped scale the platform from zero to nearly 1 million users. 
                Built comprehensive developer documentation, created technical content, and established community 
                programs that contributed to Neon's successful $1B acquisition by Databricks.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-medium">ScyllaDB</h3>
              <p className="text-sm text-muted-foreground mb-2">Developer Advocate</p>
              <p className="text-muted-foreground">
                Focused on building relationships with the distributed systems and database communities. 
                Created technical content around NoSQL databases, performance optimization, and distributed 
                systems architecture.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-medium">Microsoft</h3>
              <p className="text-sm text-muted-foreground mb-2">Developer Relations</p>
              <p className="text-muted-foreground">
                Worked on global developer relations programs, helping developers adopt Microsoft technologies 
                and build solutions on the Azure platform. Engaged with developer communities across multiple 
                regions and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">DevRel Philosophy</h2>
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg cursor-pointer hover:bg-muted/80 transition-colors" onClick={() => document.getElementById('connect-with-developers')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Connect & Solve</h3>
                  <p className="text-muted-foreground">
                    Building genuine connections with developers and helping solve their real-world problems through direct engagement, community support, and technical guidance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg cursor-pointer hover:bg-muted/80 transition-colors" onClick={() => document.getElementById('educate-developers')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Educate & Inform</h3>
                  <p className="text-muted-foreground">
                    Educating developers on the latest technological trends, providing honest assessments of trade-offs, and helping them make informed technology decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Developer Experience</h3>
                  <p className="text-muted-foreground">
                    Collaborating with product and engineering teams to build exceptional developer experiences, from documentation to tooling and platform capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect & Solve Deep Dive */}
        <section id="connect-with-developers">
          <h2 className="text-2xl font-semibold mb-8">Connect with Developers & Help Solve Problems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Why</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Increase brand awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Build credibility and trust within the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Seek developer feedback</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">How</h3>
              <p className="text-muted-foreground">
                I actively engage with developers on social media and at in-person events such as community meetups and conferences. 
                My goal is to have honest discussions to help solve their problems and build trust within the community.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Trust Formula</h3>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-mono text-lg text-primary mb-3">Trust = (Credibility + Reliability) / Self-interest</p>
              <p className="text-sm text-muted-foreground mb-4">Source: The Trusted Advisor</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Credibility</h4>
                  <p className="text-sm text-muted-foreground">Know your stuff and be honest about what you don't know</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Reliability</h4>
                  <p className="text-sm text-muted-foreground">Be transparent and do what you say</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Self-interest</h4>
                  <p className="text-sm text-muted-foreground">The less self-centered, the bigger the trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">How to Measure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Number of events attended</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">In-person engagements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Meetups and Conferences */}
          <div className="mt-12">
            <h3 className="text-lg font-medium mb-6">Community Engagement</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-4">Meetups and Communities</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Paris</span>
                    <span className="text-sm">TypeScript Paris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Paris</span>
                    <span className="text-sm">GenAI Paris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Paris</span>
                    <span className="text-sm">AI Tinkerers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">NYC</span>
                    <span className="text-sm">AI Agent Tools at Microsoft Reactor NYC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Amsterdam</span>
                    <span className="text-sm">Vercel | Neon | Miro Amsterdam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Berlin</span>
                    <span className="text-sm">AI Tinkerers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">San Francisco</span>
                    <span className="text-sm">All Things Web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">San Francisco</span>
                    <span className="text-sm">Hack Events by Weaviate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Berlin</span>
                    <span className="text-sm">Hack Events by Weaviate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Chamonix</span>
                    <span className="text-sm">Code on Slopes</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Conference Participations & Sponsorships</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2023</span>
                    <span className="text-sm">JS World 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2024</span>
                    <span className="text-sm">We Are Developers 2024 (Sponsor & Side Events)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2024</span>
                    <span className="text-sm">Next.js Conf 2024 (Sponsor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2024</span>
                    <span className="text-sm">GitHub Universe 2024 (Attendee)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2024</span>
                    <span className="text-sm">GenAI France 2024 (Organizer and Speaker)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2024</span>
                    <span className="text-sm">AWS re:Invent 2024 (Sponsor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2025</span>
                    <span className="text-sm">React Paris 2025 (Sponsor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2025</span>
                    <span className="text-sm">React Miami 2025 (Sponsor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2025</span>
                    <span className="text-sm">AI Engineer World's Fair 2025 (Speaker Manager)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">2025</span>
                    <span className="text-sm">AI Engineer Summit NYC 2025 (Speaker Manager)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Videos */}
          <div className="mt-8">
            {/* Talks */}
            <div className="mb-8">
              <h4 className="font-medium mb-4">Talks</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/_d8qy6uH8AE?start=3060&end=3900")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/_d8qy6uH8AE?start=3060&end=3900"
                      title="DevRel in Action - Video 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/WueODGlcT8c")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/WueODGlcT8c"
                      title="DevRel in Action - Video 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/tkf-xvpgJuA")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/tkf-xvpgJuA"
                      title="DevRel in Action - Video 6"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Days */}
            <div className="mb-8">
              <h4 className="font-medium mb-4">Developer Days</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/A74KeYh19jE")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/A74KeYh19jE"
                      title="Developer Days"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/Bfnt9P4CrjQ")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/Bfnt9P4CrjQ"
                      title="Neon Launch"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/VdUBdnXZnE8")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/VdUBdnXZnE8"
                      title="Developer Days Video 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Reels */}
            <div>
              <h4 className="font-medium mb-4">Highlight Reels</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/5OySwRsS3B0")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/5OySwRsS3B0"
                      title="DevRel in Action - Video 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/ZddwONtCg-Y")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/ZddwONtCg-Y"
                      title="DevRel in Action - Video 4"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/2QuD2KaPFAc")}>
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/2QuD2KaPFAc"
                      title="DevRel in Action - Video 5"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
              <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeVideo}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X className="h-8 w-8" />
                </button>
                <iframe
                  className="w-full h-full rounded-lg"
                  src={selectedVideo}
                  title="DevRel Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        {/* Educate Developers */}
        <section id="educate-developers">
          <h2 className="text-2xl font-semibold mb-8">Educate Developers on Trends and Their Trade-offs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Why</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Increase product awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Elevate the brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Drive activations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">How</h3>
              <p className="text-muted-foreground">
                Through blog posts, videos, demos, and hands-on projects that show how to effectively use devtools in real-world scenarios.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">How to Measure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Article views</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">YouTube engagement (views, likes, comments)</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Signups</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Technical Articles & Tutorials</h3>
            <div className="space-y-6">
              {/* Featured Articles */}
              <div>
                <h4 className="font-medium mb-4">Featured Articles</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="group cursor-pointer">
                    <a href="https://neon.com/blog/pgvector-30x-faster-index-build-for-your-vector-embeddings" target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                        <img 
                          src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2024%2F02%2Fimage-8.png&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy" 
                          alt="pgvector: 30x Faster Index Build for your Vector Embeddings"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <h5 className="text-sm font-medium group-hover:text-primary transition-colors">pgvector: 30x Faster Index Build for your Vector Embeddings</h5>
                    </a>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <a href="https://neon.com/blog/sub-10ms-postgres-queries-for-vercel-edge-functions" target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                        <img 
                          src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F08%2Fimage-2.jpg&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy" 
                          alt="Sub-10ms Postgres queries for Vercel Edge Functions"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <h5 className="text-sm font-medium group-hover:text-primary transition-colors">Sub-10ms Postgres queries for Vercel Edge Functions</h5>
                    </a>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <a href="https://neon.com/blog/bringing-mcp-to-the-cloud" target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                        <img 
                          src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2025%2F04%2Fimage.png&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy"
                          alt="Bringing MCP to the Cloud"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <h5 className="text-sm font-medium group-hover:text-primary transition-colors">Bringing MCP to the Cloud</h5>
                    </a>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <a href="https://neon.com/blog/dont-use-vector-use-halvec-instead-and-save-50-of-your-storage-cost" target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                        <img 
                          src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2024%2F07%2Fneon-storage-cost.jpg&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy" 
                          alt="Don't use vector. Use halvec instead and save 50% of your storage cost"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <h5 className="text-sm font-medium group-hover:text-primary transition-colors">Don't use vector. Use halvec instead and save 50% of your storage cost</h5>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm">• <a href="https://neon.com/blog/rag-with-autoscaling" target="_blank" rel="noopener noreferrer" className="hover:underline">RAG With Autoscaling: Better Performance With Lower Costs For pgvector</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/dont-use-vector-use-halvec-instead-and-save-50-of-your-storage-cost" target="_blank" rel="noopener noreferrer" className="hover:underline">Don't use vector. Use halvec instead and save 50% of your storage cost</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/neon-serverless-driver-on-jsr" target="_blank" rel="noopener noreferrer" className="hover:underline">Neon Serverless Driver on JSR</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/build-with-confidence-with-schema-diff-protected-branches" target="_blank" rel="noopener noreferrer" className="hover:underline">Build with confidence with Schema Diff & Protected Branches</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/ip-allow-with-ipv6" target="_blank" rel="noopener noreferrer" className="hover:underline">IP Allow with IPv6</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/better-postgres-with-prisma-experience" target="_blank" rel="noopener noreferrer" className="hover:underline">Better Postgres with Prisma Experience</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/deploy-mistral-large-to-azure-and-chat-with-langchain" target="_blank" rel="noopener noreferrer" className="hover:underline">Deploy Mistral Large to Azure and create a conversation with Python and LangChain</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/autoscaling-in-action-postgres-load-testing-with-pgbench" target="_blank" rel="noopener noreferrer" className="hover:underline">Autoscaling in Action: Postgres Load Testing with pgbench</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/point-in-time-recovery-in-postgres" target="_blank" rel="noopener noreferrer" className="hover:underline">Point In Time Recovery Under the Hood in Serverless Postgres</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/pgbouncer-the-one-with-prepared-statements" target="_blank" rel="noopener noreferrer" className="hover:underline">PgBouncer: The one with prepared statements</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/pgvector-30x-faster-index-build-for-your-vector-embeddings" target="_blank" rel="noopener noreferrer" className="hover:underline">pgvector: 30x Faster Index Build for your Vector Embeddings</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/branch-chose-neon-for-its-true-postgres-and-serverless-nature" target="_blank" rel="noopener noreferrer" className="hover:underline">Branch chose Neon for its true Postgres and serverless nature</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/change-data-capture-with-serverless-postgres" target="_blank" rel="noopener noreferrer" className="hover:underline">Change Data Capture with Serverless Postgres</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/announcing-branch-reset" target="_blank" rel="noopener noreferrer" className="hover:underline">Announcing Branch Reset</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/mixtral-8x7b-what-you-need-to-know-about-mistral-ais-latest-model" target="_blank" rel="noopener noreferrer" className="hover:underline">Mixtral 8x7B: What you need to know about Mistral AI's latest model</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/mistral-7b-and-baai-on-workers-ai-vs-openai-models-for-rag" target="_blank" rel="noopener noreferrer" className="hover:underline">Mistral 7B and BAAI on Workers AI vs. OpenAI Models for RAG</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/neon-polyscale-integration" target="_blank" rel="noopener noreferrer" className="hover:underline">Speed up your global queries with caching for Serverless Postgres</a></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm">• <a href="https://neon.com/blog/sunset-pgembedding" target="_blank" rel="noopener noreferrer" className="hover:underline">We're sunsetting pg_embedding in favor of pgvector</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/understanding-vector-search-and-hnsw-index-with-pgvector" target="_blank" rel="noopener noreferrer" className="hover:underline">Understanding vector search and HNSW index with pgvector</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/json-features-pg-16" target="_blank" rel="noopener noreferrer" className="hover:underline">Understanding the new JSON capabilities in Postgres 16</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/cli" target="_blank" rel="noopener noreferrer" className="hover:underline">Postgres at your fingertips with the Neon CLI</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/pg-embedding-extension-for-vector-search" target="_blank" rel="noopener noreferrer" className="hover:underline">20x faster than pgvector: introducing pg_embedding extension for vector search in Postgres and LangChain</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/http-vs-websockets-for-postgres-queries-at-the-edge" target="_blank" rel="noopener noreferrer" className="hover:underline">HTTP vs. WebSockets: Which protocol for your Postgres queries at the Edge</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/introducing-same-region-read-replicas-to-serverless-postgres" target="_blank" rel="noopener noreferrer" className="hover:underline">Introducing Same-Region Read Replicas to Serverless Postgres</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/sub-10ms-postgres-queries-for-vercel-edge-functions" target="_blank" rel="noopener noreferrer" className="hover:underline">Sub-10ms Postgres queries for Vercel Edge Functions</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/optimizing-vector-search-performance-with-pgvector" target="_blank" rel="noopener noreferrer" className="hover:underline">Optimizing vector search performance with pgvector</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/automating-neon-branch-creation-with-githooks" target="_blank" rel="noopener noreferrer" className="hover:underline">Automating Neon branch creation with Githooks</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/orms-vs-query-builders-for-your-typescript-application" target="_blank" rel="noopener noreferrer" className="hover:underline">ORMs vs. Query Builders for your Typescript application</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/building-an-ai-powered-chatbot-using-vercel-openai-and-postgres" target="_blank" rel="noopener noreferrer" className="hover:underline">Building an AI-powered ChatBot using Vercel, OpenAI, and Postgres</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/frictionless-development-experience-with-neon-branching" target="_blank" rel="noopener noreferrer" className="hover:underline">How Proposales integrated Neon in their Postgres development workflow</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/branching-postgres-databases-with-the-neon-api" target="_blank" rel="noopener noreferrer" className="hover:underline">Branching Postgres databases with the Neon API</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/database-branching-for-postgres-with-neon" target="_blank" rel="noopener noreferrer" className="hover:underline">ketteQ uses Neon branching for scenario analysis</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/neon-developer-days-1-6-8-december-2022" target="_blank" rel="noopener noreferrer" className="hover:underline">Neon Developer Days 1: 6-8 December 2022</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/october-update" target="_blank" rel="noopener noreferrer" className="hover:underline">Neon October Update</a></div>
                    <div className="text-sm">• <a href="https://neon.com/blog/neon-hasura-integration" target="_blank" rel="noopener noreferrer" className="hover:underline">Introducing the Neon Hasura integration</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Videos */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Educational Videos</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/NI2x1mhB6uI")}>
                <div className="relative w-full h-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/NI2x1mhB6uI"
                    title="Educational Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/2LPdwLPHYwk?start=51")}>
                <div className="relative w-full h-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/2LPdwLPHYwk?start=51"
                    title="Educational Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video w-full cursor-pointer group" onClick={() => openVideo("https://www.youtube.com/embed/zD1_AzzLRH0?start=14")}>
                <div className="relative w-full h-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/zD1_AzzLRH0?start=14"
                    title="Educational Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build the Best Developer Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Build the Best Developer Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Why</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Ensure the platform is intuitive and fast to use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Make developers productive from day one</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">How</h3>
              <p className="text-muted-foreground">
                Work closely with the product, engineering and support teams to collect and implement developer feedback, remove friction and build tooling.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Contributions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <a href="https://github.com/neondatabase/create-branch-action" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub Actions
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <a href="https://neon.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Neon Console
                    </a>
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <a href="https://github.com/neondatabase/examples" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Open-source repos
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <a href="https://github.com/neondatabase-labs/mcp-server-neon" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      MCP Server
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Prisma integration</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    Vector Search through pgvector and 
                    <a href="https://github.com/neondatabase-labs/pg_embedding" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 inline">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      pg_embedding
                    </a>
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <a href="https://python.langchain.com/docs/integrations/vectorstores/pgembedding/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Contribution to LangChain
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* pg_embedding Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">pg_embedding</h3>
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <a href="https://neon.com/blog/pg-embedding-extension-for-vector-search" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fimage-19.png&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy"
                      alt="pg_embedding extension for vector search"
                      className="w-64 h-36 object-cover rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    <a href="https://neon.com/blog/pg-embedding-extension-for-vector-search" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      20x faster than pgvector: introducing pg_embedding extension for vector search in Postgres and LangChain
                    </a>
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    With the help of <a href="https://github.com/knizhnik" target="_blank" rel="noopener noreferrer" className="hover:underline">Konstantin Knizhnik</a>, we implemented the HNSW index for faster vector search on Postgres through the pg_embedding extension. I then acted PM for 6 months before we sunsetted the project in favor of pgvector. I then was responsible to QA all pgvector releases and testing it with Neon autoscaling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Serverless Driver Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Serverless Driver</h3>
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <a href="https://neon.com/blog/sub-10ms-postgres-queries-for-vercel-edge-functions" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F08%2Fimage-2.jpg&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy"
                      alt="Sub-10ms Postgres queries for Vercel Edge Functions"
                      className="w-64 h-36 object-cover rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    <a href="https://neon.com/blog/sub-10ms-postgres-queries-for-vercel-edge-functions" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Sub-10ms Postgres queries for Vercel Edge Functions
                    </a>
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    I helped testing and giving feedback about the serverless driver including suggesting HTTP implementation over WebSocket implementation for one shot query performance. I benchmarked the driver against other drivers in different environments such as Lambda and Cloudflare Workers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MCP Server Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">MCP Server</h3>
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <a href="https://neon.com/blog/bringing-mcp-to-the-cloud" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://neon.com/_next/image?url=https%3A%2F%2Fneondatabase.wpengine.com%2Fwp-content%2Fuploads%2F2025%2F04%2Fimage.png&w=1920&q=85&dpl=dpl_9zaTnUm4GdYBcpx3kMLkrza6UEuy"
                      alt="Bringing MCP to the Cloud"
                      className="w-64 h-36 object-cover rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    <a href="https://neon.com/blog/bringing-mcp-to-the-cloud" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Bringing MCP to the Cloud
                    </a>
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    I tested and shared feedback with the MCP team to implement remote server, functions and explain expected behavior. This contribution helped shape the MCP protocol and its cloud integration capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">How to Measure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Developer satisfaction scores</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Time to first successful deployment</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Support ticket reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're looking to build a DevRel program from scratch or scale existing initiatives, 
            I'd love to discuss how we can work together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="mailto:raouf.chebri@gmail.com" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/#articles" 
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Read My Articles
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
} 