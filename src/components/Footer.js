import { aboutData, socialLinks } from "../lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-gray-200 py-8"
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm sm:text-base"
        >
          © {aboutData.name}. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-around space-x-6 mt-4 text-sm sm:text-base"
        >
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
