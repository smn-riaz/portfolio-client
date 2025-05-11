import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-sans font-semibold text-[#9585db] text-center">
              About Me
            </h4>
            <p className="text-base ">
              Passionate Frontend developer, constantly exploring new
              technologies and solving real-world problems. With expertise in
              MERN stack, I aim to build scalable and impactful applications.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4 text-center">
            <h4 className="text-2xl font-semibold text-[#9585db]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#34D399]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about-me" className="hover:text-[#34D399]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#34D399]">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#34D399]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-center text-[#9585db]">
              Connect with Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/smn-riaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-[#6EE7B7] transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahman-riaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-[#6EE7B7] transition-all" />
              </a>
              <a
                href="https://twitter.com/smn_riaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-[#6EE7B7] transition-all" />
              </a>
            </div>

            <div className=" flex justify-center items-center text-gray-300">
             <div className="space-y-3">
               <p className="cursor-pointer  text-center">
                {" "}
                <a
                  href="mailto:shahmanriaz07@gmail.com"
                  className="flex items-center gap-3 hover:text-[#F87171] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail className="text-[#F87171] w-5 h-5" />
                  <span>shahmanriaz07@gmail.com</span>
                </a>
              </p>

              <p className="cursor-pointer  text-center">
                <a
                  href="https://wa.me/8801631214301"
                  className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-[#25D366] w-5 h-5" />
                  <span>+8801631214301</span>
                </a>
              </p>
             </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shahman Riaz. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
