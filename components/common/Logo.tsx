"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: 
    | "black" 
    | "blackWhite" 
    | "blackYellow" 
    | "offwhite" 
    | "offwhiteBlack" 
    | "offwhiteYellow" 
    | "white" 
    | "whiteBlack" 
    | "whiteYellow" 
    | "yellow";
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const sizes = {
    xs: { width: 120, height: 35 },    // Mobile
    sm: { width: 150, height: 40 },    // xs breakpoint (360px)
    md: { width: 180, height: 45 },    // sm breakpoint (480px)
    lg: { width: 220, height: 55 },    // md breakpoint (768px)
    xl: { width: 270, height: 70 },    // lg breakpoint (1024px)
    '2xl': { width: 300, height: 80 }, // xl breakpoint (1280px)
  };

const Logo = ({ 
  variant = "black",
  size = "md",
  className = "" 
}: LogoProps) => {
  const variantKey = variant.charAt(0).toUpperCase() + variant.slice(1);

  const logoVariants = {
    // Single color variants
    Black: "/images/linnker/LogoBlack.png",
    White: "/images/linnker/LogoWhite.png",
    Yellow: "/images/linnker/LogoYellow.png",
    Offwhite: "/images/linnker/LogoOffwhite.png",
    
    // Two-tone variants
    BlackWhite: "/images/linnker/LogoBlackWhite.png",
    BlackYellow: "/images/linnker/LogoBlackYellow.png",
    OffwhiteBlack: "/images/linnker/LogoOffwhiteBlack.png",
    OffwhiteYellow: "/images/linnker/LogoOffwhiteYellow.png",
    WhiteBlack: "/images/linnker/LogoWhiteBlack.png",
    WhiteYellow: "/images/linnker/LogoWhiteYellow.png"
  };

  const { width, height } = sizes[size];

  return (
    <Link href="/" className={`shrink-0 ${className}`}>
      <Image
        src={logoVariants[variantKey as keyof typeof logoVariants]}
        alt="Linnker Logo"
        width={width}
        height={height}
        style={{ width: 'auto', height: 'auto' }}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo; 