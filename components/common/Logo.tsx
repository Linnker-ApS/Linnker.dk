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
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ 
  variant = "black", 
  width = 150, 
  height = 40,
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