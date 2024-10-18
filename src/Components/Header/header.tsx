'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between animate-fade-in">
        <h1 className="text-2xl font-bold"><Link href="/" className="mx-4">Sagar</Link></h1>
        <nav>
          <Link href="/" className="mx-4">Home</Link>
          <Link href="/projects" className="mx-4">Projects</Link>
          <Link href="/skills" className="mx-4">Skills</Link>
          <Link href="/contact" className="mx-4">Contact Me</Link>
        </nav>
      </div>
    </header>
  )
}
