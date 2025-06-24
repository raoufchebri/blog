import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/devrel")
}
