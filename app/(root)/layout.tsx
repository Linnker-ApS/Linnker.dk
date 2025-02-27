import { ReactNode } from "react";
import helvetica from "@/lib/fonts";
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={helvetica.variable}>
      <meta 
  name="viewport" 
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" 
/>
      
      <body className="bg-site-background">{children}</body>
    </html>
  );
}
