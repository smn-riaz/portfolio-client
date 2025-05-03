'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    if (data.email && data.message && data.name) {
      toast.success('Message sent successfully!', { duration: 2000 })
      reset()
    } else {
      toast.error('Please, input all data!', { duration: 1200 })
    }
  }

  return (
    <div id="contact" className="flex justify-center w-full px-6 py-28 pt-32 bg-[#0E1526]">
      <div className="grid md:grid-cols-4 gap-8 w-full max-w-7xl">
        <div className="col-span-1" />

        {/* Main Content */}
        <div className="col-span-2">
          {/* Top Contact Info Row */}
         

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-[#ffffff] mb-6 font-sans">
            Contact Me
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl shadow-xl border border-[#334155] p-8 space-y-6"
          >
            {/* Name */}
            <div className="flex justify-center items-center flex-wrap gap-6 mb-8 text-gray-300 text-sm sm:text-base">
            <a
              href="mailto:shahmanriaz07@gmail.com"
              className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              <FaEnvelope className="text-lg" />
              shahmanriaz07@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/shahman-riaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              <FaLinkedin className="text-lg" />
              linkedin.com/in/shahman-riaz
            </a>
            <a
              href="https://wa.me/8801631214301"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              +880 1631 214301
            </a>
          </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:ring-2 focus:ring-[#121227] outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:ring-2 focus:ring-[#1d172c] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                rows={5}
                {...register('message')}
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:ring-2 focus:ring-[#19142b] outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer text-blue-950 bg-[#efeef1e0] hover:bg-[#e7e7ee] font-bold py-2 px-6 rounded-lg transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1" />
      </div>
    </div>
  )
}
