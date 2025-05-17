import { motion } from "framer-motion";
import { skills } from "../lib/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16"
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <motion.h1
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
            Skills
          </motion.h1>
        </div>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 text-center text-sm sm:text-base  text-gray-100 bg-[#607D8B] rounded-lg py-6"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
