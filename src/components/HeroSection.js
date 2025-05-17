"use client";

import { motion } from "framer-motion";
import { aboutData } from "../lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7BE81] via-white to-[#4F6D7A]">
      <div className="container mx-auto px-6 py-12 flex justify-around items-center text-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <Image
              src="/image/profile.png"
              width={400}
              height={400}
              alt={aboutData.name}
              className="w-62 h-62 rounded-full shadow-lg mx-auto border-4 border-orange-300 object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-800 flex items-center justify-center gap-2"
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "20px",
                fontSize: "3rem", // 2xl in Tailwind is 1.5rem
              }}
            >
              Hi I&apos;m
              <span className="text-orange-500 flex items-center gap-2">
                {aboutData.name}
                <motion.span
                  role="img"
                  aria-label="waving hand"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  style={{
                    display: "inline-block",
                    originX: 0.7,
                    originY: 0.7,
                  }}
                >
                  👋
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl max-w-2xl mx-auto mb-8 text-gray-600"
            >
              Full-stack developer crafting innovative and scalable web
              solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
