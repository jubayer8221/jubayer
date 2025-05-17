"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Smartphone", price: 599, image: "/image/product1.jpg" },
  { id: 2, name: "Laptop", price: 999, image: "/image/product3.png" },
];

export default function ECommerceDemo() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div
      className="glass-card p-6"
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <h3
        className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-wide uppercase"
        style={{
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "20px",
          fontSize: "1.5rem", // 2xl in Tailwind is 1.5rem
        }}
      >
        E-Commerce Demo
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-300 p-4 rounded-lg shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="">{product.name}</p>
            <p className="">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2  text-white py-1 px-4 rounded text-sm"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
      <h4 className="text-lg font-semibold mb-2">Cart ({cart.length})</h4>
      <div className="max-h-40 overflow-y-auto">
        {cart.length === 0 ? (
          <p className=" text-sm">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-between items-center p-2 rounded mb-2 text-sm"
            >
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
