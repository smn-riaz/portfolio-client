'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../../assets/logo.png'
import Image from 'next/image'


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-[#122041] border border-[#2e3c63] rounded-2xl shadow-lg max-w-7xl mx-auto mt-6 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#5845c5] rounded-full ">
            <span className="text-white text-lg font-bold">
                <Image className='rounded-full' src={logo} alt="Riaz" width={40} height={40} />
            </span>
          </div>
          <span className="text-white font-semibold text-lg">Shahman Riaz</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-gray-300 font-medium text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-[#5845c5] text-white cursor-pointer hover:bg-[rgb(70,52,170)] font-semibold rounded-xl">
            Let’s Talk <ArrowUpRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-gray-300 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Button className="mt-2 bg-[#ff5722] text-white hover:bg-[#e64a19] font-semibold rounded-xl w-fit">
            Let’s Talk <ArrowUpRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  )
}
