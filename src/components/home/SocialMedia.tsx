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
          href="https://github.com/smn-riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6e40c9] transition"
        >
          <Github size={20} />
        </Link>
       </div>
       <div>
       <Link
          href="https://www.linkedin.com/in/shahman-riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0A66C2] transition"
        >
          <Linkedin size={20} />
        </Link>
       </div>
        <div>
        <Link
          href="https://x.com/smn_riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DA1F2] transition"
        >
          <Twitter size={20} />
        </Link>
        </div>
        <div>
        <Link
          href="mailto:shahmanriaz07@gmail.com"
          className="text-white hover:text-pink-500 transition"
        >
          <Mail size={20} />
        </Link>
        </div>
        <div>
        <Link
          href="https://shahmanriaz.vercel.app"
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
  