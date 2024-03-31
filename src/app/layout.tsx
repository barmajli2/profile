import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tajawal = Barlow(
  {
    subsets: ['latin'],
    weight: ['500', '600', '700']
  });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Ahmed Mohamed ,This is my Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tajawal.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
