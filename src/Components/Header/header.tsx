'use client'

import { useTheme } from '../../Context/themeContext'
import Link from 'next/link'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  // Function to check if the link is active
  const isActive = (path: string) => {
    return router.pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ease-in-out duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-r from-yellow-400 to-yellow-200 text-black shadow-md'
          : 'bg-gradient-to-r from-black to-yellow-400 text-yellow-400 shadow-lg'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Sagar Title with Stylish Hover Animation */}
        <h1 className="text-2xl font-bold sm:text-3xl">
          <Link
            href="/"
            className="mx-4 relative group text-white transition-all duration-200"
          >
            {/* The "S" initially takes more space */}
            <span className="text-5xl sm:text-6xl font-extrabold group-hover:text-yellow-400 transition-all duration-500">
              S
            </span>
            {/* The rest of "agar" stays hidden initially */}
            <span className="text-xl sm:text-2xl opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 transition-all duration-500">
              agar
            </span>

            {/* Animated effect for making the "S" bigger on hover */}
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300`}
            ></span>
          </Link>
        </h1>

        {/* Navigation with Box Shadows on Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`relative group text-white hover:text-yellow-400 transition-all duration-200 ${isActive('/') ? 'text-yellow-400 font-bold' : ''}`}
          >
            <span className="block pb-1">Home</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></div>
          </Link>
          <Link
            href="/about"
            className={`relative group text-white hover:text-yellow-400 transition-all duration-200 ${isActive('/about') ? 'text-yellow-400 font-bold' : ''}`}
          >
            <span className="block pb-1">About</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></div>
          </Link>
          <Link
            href="/projects"
            className={`relative group text-white hover:text-yellow-400 transition-all duration-200 ${isActive('/projects') ? 'text-yellow-400 font-bold' : ''}`}
          >
            <span className="block pb-1">Projects</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></div>
          </Link>
          <Link
            href="/skills"
            className={`relative group text-white hover:text-yellow-400 transition-all duration-200 ${isActive('/skills') ? 'text-yellow-400 font-bold' : ''}`}
          >
            <span className="block pb-1">Skills</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></div>
          </Link>
          <Link
            href="/contact"
            className={`relative group text-white hover:text-yellow-400 transition-all duration-200 ${isActive('/contact') ? 'text-yellow-400 font-bold' : ''}`}
          >
            <span className="block pb-1">Contact Me</span>
            {/* No extra box shadow needed after the last link */}
          </Link>
        </nav>

        {/* Theme Toggle with Yellow Background for Visibility */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FaMoon className="text-xl text-black" />
          ) : (
            <FaSun className="text-xl text-black" />
          )}
        </button>
      </div>
    </header>
  )
}
