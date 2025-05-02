'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Front-End Web Developer',
  'MERN Stack Developer',
  'Full Stack Developer',
  'Lifelong Learner 📚',
  'Code. Create. Repeat.',
]

const RoleText = () => {
  const [currentText, setCurrentText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = deleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentText(currentRole.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1000)
        }
      } else {
        setCurrentText(currentRole.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex === 0) {
          setDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="text-lg md:text-2xl font-mono text-white mt-4 h-8 md:h-10"
    >
      <span className="text-[#00FFFF]">{currentText}</span>
      {/* <span className="blinking-cursor text-white"></span> */}
    </motion.div>
  )
}

export default RoleText
