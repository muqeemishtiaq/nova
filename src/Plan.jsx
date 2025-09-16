import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact"; // using Contact instead of Footer

const Plan = () => {
  const [customerName, setCustomerName] = useState("");

  const plans = [
    { 
      id: 0, 
      duration: "Free Trial", 
      price: "24 Hours",
      message: "I want to try the Free 24 Hours Trial."
    },
    { 
      id: 1, 
      duration: "1 Month", 
      price: "£12",
      message: "I am interested in subscribing for 1 Month (£12)."
    },
    { 
      id: 2, 
      duration: "3 Months", 
      price: "£30",
      message: "I would like to subscribe for 3 Months (£30)."
    },
    { 
      id: 3, 
      duration: "6 Months", 
      price: "£40",
      message: "I want to get the 6 Months plan (£40)."
    },
    { 
      id: 4, 
      duration: "12 Months", 
      price: "£60",
      message: "I want to go with the 12 Months plan (£60)."
    },
  ];

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Replace with your WhatsApp number
  const whatsappNumber = "447598977421";

  // ✅ Create dynamic WhatsApp link with custom messages
  const createWhatsAppLink = (plan) => {
    const intro = customerName
      ? `Hello, my name is ${customerName}. `
      : "Hello, ";
    
    const message = intro + plan.message;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      {/* Neon background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>

          {/* Customer Name Input */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="px-4 py-2 rounded-lg border border-purple-500/40 bg-black text-white focus:outline-none focus:border-blue-500 w-80"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-black bg-opacity-70 border border-purple-500/40 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:border-blue-500/70 transition-transform"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.duration}</h3>
                <p className="text-3xl font-bold mb-6 text-purple-300">
                  {plan.price}
                </p>
                <a
                  href={createWhatsAppLink(plan)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                  {plan.id === 0 ? "Start Trial" : "Select Plan"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section (instead of Footer) */}
      <Contact />
    </div>
  );
};

export default Plan;
