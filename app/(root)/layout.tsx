import { ReactNode } from "react";
import helvetica from "./fonts";
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={helvetica.variable}>
      <body className="bg-site-background">{children}</body>
    </html>
  );
}
