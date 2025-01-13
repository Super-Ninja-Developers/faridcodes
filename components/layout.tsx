import Link from "next/link"
import { Github } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#fdf6e3] text-[#073642] font-mono">
      <header className="border-b-4 border-[#073642] bg-[#eee8d5] shadow-md">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-[#268bd2] transition-colors">
              Farid
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/articles" className="hover:text-[#268bd2] transition-colors">
                Articles
              </Link>
              <Link href="/projects" className="hover:text-[#268bd2] transition-colors">
                Projects
              </Link>
              <a 
                href="https://github.com/faridmurzone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#268bd2] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t-4 border-[#073642] bg-[#eee8d5] mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>{new Date().getFullYear()} - Farid Codes </p>
        </div>
      </footer>
    </div>
  )
}

