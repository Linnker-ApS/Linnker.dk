"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <Logo variant="white" width={170} height={50} />

          {/* Social Media Icons */}
          <div className="flex space-x-4 space/">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
            >
              <Instagram size={28} />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
            >
              <Facebook size={28} />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
            >
              <Linkedin size={28} />
            </Link>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm mb-4">
            <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-settings" className="hover:text-yellow-500 transition-colors">
              Cookie Settings
            </Link>
            <Link href="/faq" className="hover:text-yellow-500 transition-colors">
              FAQ
            </Link>
            <Link href="/submit-property" className="hover:text-yellow-500 transition-colors">
              Submit Property
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
