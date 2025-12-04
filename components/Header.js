"use client"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'What we Do', href: '#what-we-do' },
  { name: 'How we Help', href: '#how-we-help' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 z-50">
          <span className="font-bold text-xl tracking-widest uppercase">B. Logo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-background z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-medium text-secondary hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  )
}
