import { motion } from "framer-motion";
import { blogPosts } from "../lib/data";

export default function BlogSection() {
  return (
    <section
      id="blog"
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
          Recent Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold  mb-2">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm border border-gray-400 shadow-lg p-4 sm:text-base"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
