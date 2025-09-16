import React from "react";
import { Link } from "react-router-dom"; // ✅ Use react-router-dom

const Services = () => {
  const products = [
    { id: 1, title: "Sky Live", description: "High-quality product.", image: "/11.jpeg" },
    { id: 2, title: "B1G", description: "Perfect solution.", image: "/12.jpeg" },
    { id: 3, title: "Sky TV", description: "Advanced features.", image: "/13.jpeg" },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-black text-white">
      {/* 🌌 Neon background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-cyan-400 drop-shadow-[0_0_20px_#00f6ff]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900/60 backdrop-blur-md rounded-lg border border-cyan-400 shadow-[0_0_20px_#00f6ff] hover:shadow-[0_0_35px_#00f6ff] transition p-6 text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 mx-auto mb-6 object-cover rounded shadow-[0_0_20px_#00f6ff] hover:shadow-[0_0_35px_#00f6ff] transition"
              />
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>

              {/* Navigate to Plan page */}
              <Link
                to="/plan"
                className="inline-block bg-cyan-500 text-black px-6 py-2 rounded shadow-[0_0_15px_#00f6ff] hover:bg-cyan-400 hover:shadow-[0_0_25px_#00f6ff] transition"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
