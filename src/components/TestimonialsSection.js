"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../lib/data";

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16"
      style={{
        padding: "30px",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
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
          Testimonials
        </motion.h2>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-8 max-w-full mx-auto rounded-xl shadow-lg border border-gray-200"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              backdropFilter: "blur(6px)",
              borderRadius: "1rem",
              border: "1px solid #e5e7eb",
              padding: "20px",
            }}
          >
            <p className="font-semibold text-base sm:text-lg mb-2 tracking-wide">
              {testimonials[testimonialIndex].name}
            </p>
            <p className="text-base sm:text-lg italic mb-4 leading-relaxed">
              {testimonials[testimonialIndex].comment}
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevTestimonial}
                className="px-4 py-2 rounded border border-gray-300 shadow-sm transition-transform duration-150 hover:scale-105"
                aria-label="Previous testimonial"
                style={{
                  background:
                    "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 100%)",
                  padding: "10px",
                }}
              >
                Prev
              </button>
              <button
                onClick={nextTestimonial}
                className="px-4 py-2 rounded border border-gray-300 shadow-sm transition-transform duration-150 hover:scale-105"
                aria-label="Next testimonial"
                style={{
                  background:
                    "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 100%)",
                  padding: "10px",
                }}
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
