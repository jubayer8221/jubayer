"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-16"
      style={{
        padding: "30px",
        paddingLeft: "100px",
        paddingRight: "100px",
        margin: "40px 0", // Added margin
      }}
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
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleFormSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto w-full glass-card p-8 m-4 shadow-lg border border-gray-300 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm sm:text-base"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base shadow-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full border border-gray-400 transition-colors text-sm sm:text-base p-3 rounded shadow-md bg-gray-100 hover:bg-gray-200"
          >
            Send Message
          </button>
          {formSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-600 dark:text-green-400 text-sm sm:text-base text-center"
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
