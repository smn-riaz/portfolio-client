import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Phone,
} from "lucide-react";

const bounceKeyframes = {
  y: [0, -5, 0],
};

export default function SocialMedia() {
  return (
    <div className="space-y-8 w-[25px]">
      <motion.div
        animate={bounceKeyframes}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0,
        }}
      >
        <Link
          href="https://github.com/smn-riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6e40c9] transition"
        >
          <Github size={20} />
        </Link>
      </motion.div>

      <motion.div
        animate={bounceKeyframes}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.15,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/shahman-riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0A66C2] transition"
        >
          <Linkedin size={20} />
        </Link>
      </motion.div>

      <motion.div
        animate={bounceKeyframes}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Link
          href="https://x.com/smn_riaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DA1F2] transition"
        >
          <Twitter size={20} />
        </Link>
      </motion.div>

      <motion.div
        animate={bounceKeyframes}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.45,
        }}
      >
        <Link
          href="mailto:shahmanriaz07@gmail.com"
          className="text-white hover:text-pink-500 transition"
        >
          <Mail size={20} />
        </Link>
      </motion.div>

      {/* 📞 Phone Icon */}
      <motion.div
        animate={bounceKeyframes}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        <Link
          href="tel:+8801631214301"
          className="text-white hover:text-yellow-400 transition"
        >
          <Phone size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
