'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="container mx-auto p-4 flex justify-between animate-fade-in">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="mx-4 text-white hover:underline hover:text-blue-600 transition duration-200">Sagar</Link>
        </h1>
        <nav>
          <Link href="/" className="mx-4 text-white hover:underline hover:text-green-500 transition duration-200">Home</Link>
          <Link href="/about" className="mx-4 text-white hover:underline hover:text-green-5000 transition duration-200">About</Link>
          <Link href="/projects" className="mx-4 text-white hover:underline hover:text-green-500 transition duration-200">Projects</Link>
          <Link href="/skills" className="mx-4 text-white hover:underline hover:text-green-500 transition duration-200">Skills</Link>
          <Link href="/contact" className="mx-4 text-white hover:underline hover:text-green-500 transition duration-200">Contact Me</Link>
        </nav>
      </div>
    </header>
  )
}
