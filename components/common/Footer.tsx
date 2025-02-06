"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white max-h-[30vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Image
            src="/images/LogoWhite.png"
            alt="Linnker Logo"
            width={300}
            height={50}
            className="mx-auto"
          />

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
            >
              <Facebook size={24} />
            </Link>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-settings" className="hover:text-yellow-500 transition-colors">
              Cookie Settings
            </Link>
            <Link href="/faq" className="hover:text-yellow-500 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
