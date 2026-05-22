// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Job<span className="text-blue-400">AI</span>
          </h2>
          <p className="text-slate-400 mt-3 leading-7">
            Find your dream job with AI-powered matching.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Companies</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-slate-400">support@jobai.com</p>
          <p className="text-slate-400 mt-2">Hyderabad, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-slate-400 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:support@jobai.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 py-4 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} JobAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;