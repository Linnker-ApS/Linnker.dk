import { ReactNode } from "react";
import helvetica from "../fonts"; // Import the font configuration
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={helvetica.variable}>
      <body>{children}</body>
    </html>
  );
}
