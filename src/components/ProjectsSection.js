import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../lib/data";
import ECommerceDemo from "@/components/ECommerceDemo";
import ChartDemo from "./ChartDemo";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold  mb-2">{project.title}</h3>
              <p className=" text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline text-sm sm:text-base"
              >
                View Project
              </a>
              <div className="mt-4">
                {project.title.includes("E-Commerce") ? (
                  <ECommerceDemo />
                ) : (
                  <ChartDemo />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
