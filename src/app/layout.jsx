"use client";

import { ThemeProvider } from "next-themes";
import "../app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Jubayer Al Mahmud - Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of John Doe, a full-stack developer crafting innovative web solutions with Next.js and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="developer portfolio, full-stack, Next.js, Tailwind CSS"
        />
        <meta name="author" content="John Doe" />
        <meta property="og:title" content="John Doe - Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore John Doe's projects and skills in web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johndoeportfolio.com" />
        <meta property="og:image" content="/profile.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
