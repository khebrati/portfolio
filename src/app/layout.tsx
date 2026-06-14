import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCard from "@/components/FloatingCard";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kotlin Multiplatform Developer",
  description:
    "Personal portfolio of Mohammad Erfan Khebrati — computer engineer specializing in multi-platform development, system programming, and networking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-bg text-text antialiased" suppressHydrationWarning>
        <Navbar />
        <div className="flex-1 flex flex-col lg:flex-row lg:px-[5%]">
          <FloatingCard />
          <main className="flex-1 px-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
