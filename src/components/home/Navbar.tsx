'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/#about-me' },
  { name: 'Project', href: '/projects' },
  { name: 'Skill', href: '/#skills' },
  { name: 'Blogs', href: '/#blogs' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const router = useRouter()

  return (
    <nav className="bg-[#122041] shadow-2xl max-w-[1300] mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
 
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#5845c5] rounded-full ">
            <span className="text-white text-lg font-bold">
                <Image className='rounded-full' src={logo} alt="Riaz" width={40} height={40} />
            </span>
          </div>
          <span className="text-white font-semibold text-lg">Shahman Riaz</span>
        </Link>

    
        <div className="hidden md:flex gap-6 text-gray-300 font-medium text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

 
       <div className="hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          onClick={() => router.push("/resume")}
          className="relative bg-[#261d55] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 group px-6 py-2"
        >
          <span className="relative z-10 flex items-center">
            RESUME
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </span>

          {/* Always-visible shimmer */}
          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide blur-sm pointer-events-none" />

          {/* Glow background */}
          <span className="absolute inset-0 bg-[#7a4fac] shadow-[0_0_30px_#7a4fac] opacity-30 pointer-events-none rounded-xl" />
        </Button>
      </motion.div>
    </div>



    
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


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

          <Button onClick={() => router.push("/resume")} className="mt-2  font-semibold bg-[#5845c5] text-white cursor-pointer hover:bg-[rgb(70,52,170)] rounded-xl w-fit">
            RESUME <ArrowUpRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  )
}
