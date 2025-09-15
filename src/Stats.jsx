import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

// Reusable counter component
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalDuration = 2000; // 2 seconds
    let incrementTime = 20; // ms
    let step = Math.ceil(end / (totalDuration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-black bg-opacity-70 border border-purple-500/40 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:border-blue-500/70 transition-transform">
      <h3 className="text-4xl font-bold text-purple-300 mb-3">
        {count.toLocaleString()}+
      </h3>
      <p className="text-lg text-white">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex flex-col bg-black relative overflow-hidden">
      {/* Neon background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-10">Why Choose Sky Nova?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Counter target={13} label="Years of Experience" />
            <Counter target={31000} label="Channels Worldwide" />
            <Counter target={400000} label="Happy Clients" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stats;
