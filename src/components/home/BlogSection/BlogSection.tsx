'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaReact, FaJsSquare } from 'react-icons/fa'

import react from '../../../assets/react.png'
import js from '../../../assets/js.jpg'
import ninjs from '../../../assets/js ninja.jpg'

export default function BlogSection() {
  const blogs = [
    {
      title: 'React Fundamentals',
      url: 'https://shman1739riaz.medium.com/react-fundamentals-3944d2d3de0f',
      description: 'A solid introduction to core React concepts—ideal for beginners and those revisiting fundamentals.',
      image: react, // You can replace this with the actual image URL or import
      techIcon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      title: 'You Should Know These JavaScript Hints',
      url: 'https://shman1739riaz.medium.com/you-should-know-these-javascript-hints-8af5acfec951',
      description: 'Explore handy JavaScript tips and tricks to write cleaner, more efficient code.',
      image: js, // Replace with image URL or import
      techIcon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      title: 'Basic Ninja of JavaScript',
      url: 'https://shman1739riaz.medium.com/basic-ninja-of-javascript-5aa171bf8263',
      description: 'A brief guide for mastering foundational JavaScript skills with a ninja mindset.',
      image: ninjs, // Replace with image URL or import
      techIcon: <FaJsSquare className="text-yellow-400" />,
    }
  ]

  return (
    <section id="blogs" className="w-full mx-auto xl:max-w-[1300px] px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold font-sans text-center text-[#ffffff] mb-6 flex items-center justify-center gap-3">
           
            BLOGS
          </h2>
       
        <div className="flex justify-center items-center">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-3/4 max-w-7xl">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] rounded-xl border border-[#334155] shadow-md hover:shadow-lg transition hover:scale-[1.02] p-6 text-left text-gray-300 hover:text-white"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-3">
                  {blog.techIcon}
                  <span className="font-medium text-lg">{blog.title}</span>
                </div>
                <p className="text-sm mb-4">{blog.description}</p>
                <span className="inline-flex items-center text-blue-400 font-medium">
                  Read More <FaExternalLinkAlt className="ml-2 text-sm" />
                </span>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
