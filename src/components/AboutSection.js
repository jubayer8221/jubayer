import Image from "next/image";
import { motion } from "framer-motion";
import { aboutData, socialLinks } from "../lib/data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-6 "
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px] py-10 my-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-wide uppercase"
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "20px",
            fontSize: "1.5rem", // 2xl in Tailwind is 1.5rem
          }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-2/3 glass-card p-8  rounded-xl shadow-lg border bg-[#F7BE81] text-black border-gray-200 dark:border-gray-700"
          >
            <p
              className=" text-sm sm:text-base mb-6 leading-relaxed"
              style={{ padding: "10px", margin: "10px" }}
            >
              {aboutData.description}
            </p>
            <div className="flex flex-wrap justify-around gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:bg-blue-200 dark:hover:bg-gray-800/30 text-sm sm:text-base px-4 py-2 rounded bg-blue-100  transition-colors"
                  style={{
                    marginBottom: "8px",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className=" p-4 rounded-full shadow-xl border-4 ">
              <Image
                src={aboutData.profileImage}
                alt={aboutData.name}
                width={200}
                height={200}
                className="rounded-full shadow-lg w-48 h-48 sm:w-56 sm:h-56"
                style={{ padding: "8px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
