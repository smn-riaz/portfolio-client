import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Globe,
  } from 'lucide-react'
import Link from 'next/link'
  
  const SocialMedia = () => {
    return (
      <div className="space-y-4 w-[25px]">
       <div>
       <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6e40c9] transition"
        >
          <Github size={20} />
        </Link>
       </div>
       <div>
       <Link
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0A66C2] transition"
        >
          <Linkedin size={20} />
        </Link>
       </div>
        <div>
        <Link
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DA1F2] transition"
        >
          <Twitter size={20} />
        </Link>
        </div>
        <div>
        <Link
          href="mailto:youremail@example.com"
          className="text-white hover:text-pink-500 transition"
        >
          <Mail size={20} />
        </Link>
        </div>
        <div>
        <Link
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <Globe size={20} />
        </Link>
        </div>
      </div>
    )
  }
  
  export default SocialMedia
  