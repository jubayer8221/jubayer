import Image from "next/image";
import { motion } from "framer-motion";
import { cvData } from "../lib/data";

export default function CVSection() {
  return (
    <section
      id="cv"
      className="py-16 "
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          My CV
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/3 flex justify-center"
          >
            <Image
              src={cvData.previewImage}
              alt="CV Preview"
              width={250}
              height={350}
              className="rounded-lg shadow-lg w-full max-w-[250px] sm:max-w-[300px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-2/3 glass-card p-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold  mb-4">
              CV Details
            </h3>
            {cvData.details.map((detail, index) => (
              <p key={index} className="mb-3  text-sm sm:text-base">
                <strong>{detail.label}:</strong> {detail.value}
              </p>
            ))}
            <a
              href={cvData.downloadLink}
              download
              className="inline-block py-2 px-6 rounded-full  transition-colors text-sm sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
