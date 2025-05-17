import { motion } from "framer-motion";
import { certifications } from "../lib/data";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-16"
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
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                {cert.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {cert.issuer}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
