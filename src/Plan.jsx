import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ To get service from state
import Navbar from "./Navbar";
import Contact from "./Contact";

const Plan = () => {
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // ✅ Get service from navigation state
  const location = useLocation();
  const selectedService = location.state?.service || "Unknown Service";

  const plans = [
    { id: 0, duration: "Free Trial", price: "24 Hours" },
    { id: 1, duration: "1 Month", price: "£12" },
    { id: 2, duration: "3 Months", price: "£30" },
    { id: 3, duration: "6 Months", price: "£40" },
    { id: 4, duration: "12 Months", price: "£60" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "447598977421";

  const createWhatsAppLink = (plan) => {
    const message = `Hello, my name is ${customerName}. I want to choose *${selectedService}* with the ${plan.duration} plan (${plan.price}).`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      {/* Neon background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      <Navbar />

      <main className="flex-1 relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>

          {/* Show selected service */}
          <p className="text-lg mb-6 text-purple-300">
            Selected Service: <span className="font-semibold">{selectedService}</span>
          </p>

          {/* Customer Name Input */}
          <div className="mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
                setError("");
              }}
              required
              className="px-4 py-2 rounded-lg border border-purple-500/40 bg-black text-white focus:outline-none focus:border-blue-500 w-80"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-black bg-opacity-70 border border-purple-500/40 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:border-blue-500/70 transition-transform"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.duration}</h3>
                <p className="text-3xl font-bold mb-6 text-purple-300">{plan.price}</p>
                <a
                  href={customerName ? createWhatsAppLink(plan) : "#"}
                  onClick={(e) => {
                    if (!customerName) {
                      e.preventDefault();
                      setError("Please enter your name before selecting a plan.");
                      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                      inputRef.current?.focus();
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-6 py-2 rounded transition ${
                    customerName
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {plan.id === 0 ? "Start Trial" : "Select Plan"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default Plan;
