import "../globals.css";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}
