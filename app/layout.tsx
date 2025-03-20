import "./globals.css";
import { Providers } from "./providers";
import helvetica from "@/lib/fonts";

export const metadata = {
  title: "Linnker",
  description: "Book your next stay with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} font-helvetica`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
