"use client";
import Link from "next/link";
import { useState } from "react";
// import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-[#4F6D7A] text-white sticky top-0 justify-around">
      <header
        className="sticky top-0 z-50 justify-around"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-wide uppercase"
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "20px",
                fontSize: "1.5rem", // 2xl in Tailwind is 1.5rem
              }}
            >
              {aboutData.name}
            </motion.h1>
          </div>
          <div className="justify-between flex items-center gap-6">
            <button
              className="md:hidden p-4"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-full h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <nav
              className={`md:flex md:space-x-6 ${
                menuOpen ? "block" : "hidden"
              } absolute md:static top-16 left-0 w-full border-b-red-100 md:bg-transparent p-4 md:p-0`}
            >
              <ul className="h-16 items-center flex flex-col md:flex-row space-y-4 md:space-y-0 pl-5  lg:space-x-10 gap-5 md:space-x-6 text-sm sm:text-base">
                {["about", "cv", "skills", "projects", "blog", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`#${item}`}
                        className="text-3xl sm:text-4xl  mb-8 text-center hover:border hover:border-b-gray-300 uppercase"
                        style={{
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          padding: "20px",
                          fontSize: "1rem", // 2xl in Tailwind is 1.5rem
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
            {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full "
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>*/}
          </div>
        </div>
      </header>
    </div>
  );
}
