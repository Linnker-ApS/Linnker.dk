import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "black" | "white";
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
  return (
    <Link href="/" className={`shrink-0 ${className}`}>
      <Image
        src={`/images/Logo${variant === "black" ? "Black" : "White"}.png`}
        alt="Linnker Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo; 