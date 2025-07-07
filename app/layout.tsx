import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/Century Gothic.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Century Gothic Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Century Gothic italic.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Century Gothic Bold italic.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-century-gothic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Julius | Portfolio",
  description: "Product Designer Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${centuryGothic.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable}  antialiased font-hanken-grotesk`}
      >
        {children}
      </body>
    </html>
  );
}
