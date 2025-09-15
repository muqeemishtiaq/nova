import React from "react";
import Navbar from "./Navbar";

// ⭐ Star rating component
const Stars = ({ rating }) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-yellow-400 text-lg ${
            i < rating ? "" : "opacity-30"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Reviews = () => {
  // British names list
  const britishNames = [
    "Oliver Smith ",
    "Amelia Jones ",
    "Harry Taylor ",
    "Isla Brown ",
    "George Wilson ",
    "Emily Johnson ",
    "Jack Davies ",
    "Sophia Clark ",
    "Thomas Lewis ",
    "Charlotte Hall ",
    "James Thompson ",
    "Mia Harris",
    "Daniel Walker ",
    "Lily Young ",
    "Matthew King ",
  ];

  // User comments
  const reviewTexts = [
    "Sky Nova is brilliant! The channels load instantly and the 8K quality is unbelievable.",
    "Best streaming service I’ve ever used. Smooth, fast, and full of content.",
    "Absolutely love Sky Nova! Never any buffering and the channels are crystal clear.",
    "Super reliable service. I can watch my favourite sports in 8K without lag.",
    "Impressed with the speed! Switching channels is instant. Top notch service.",
    "Hands down the best IPTV I’ve tried in the UK. Smooth streams every time.",
    "Sky Nova has exceeded my expectations. Great for family entertainment nights.",
    "The 8K quality is unreal. Feels like I’m right there in the stadium!",
    "Reliable, affordable, and amazing quality. Couldn’t ask for more.",
    "Great customer service and fantastic channels. Highly recommend.",
    "Sky Nova is perfect for movies. The clarity and sound are top tier.",
    "I’ve tried other services, but Sky Nova stands out for speed and reliability.",
    "Very good service overall. Just wish there were a few more UK channels.",
    "Excellent quality but took me a moment to set it up. Worth it though.",
    "Solid streaming platform with fantastic performance. Really happy with it.",
  ];

  // Build reviews
  const reviews = reviewTexts.map((text, i) => ({
    id: i + 1,
    name: britishNames[i],
    image: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
    text,
    rating: i < 12 ? 5 : 4,
  }));

  // Average rating
  const avg =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="flex flex-col bg-black relative overflow-hidden ">
      {/* Neon background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content (centered) */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 py-10 px-4 w-full">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-3">What Our Users Say</h2>

          {/* ⭐ Average Stars */}
          <div className="flex justify-center items-center mb-6">
            <Stars rating={Math.round(avg)} />
            <span className="ml-3 text-md text-purple-300">
              {avg.toFixed(1)} / 5.0 (15675 Reviews)
            </span>
          </div>
        </div>

        {/* Reviews Auto Scroll */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll space-x-6 w-full">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={review.id + "-" + index}
                className="bg-black bg-opacity-70 border border-purple-500/40 rounded-lg shadow-lg p-5 min-w-[280px] max-w-[280px] flex-shrink-0 text-left"
              >
                {/* User Info */}
                <div className="flex items-center mb-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border-2 border-purple-500 mr-2"
                  />
                  <span className="font-semibold text-white text-sm">
                    {review.name}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-200 italic mb-2">
                  “{review.text}”
                </p>

                {/* Stars */}
                <Stars rating={review.rating} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
