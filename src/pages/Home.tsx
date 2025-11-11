import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] px-6">
      <div className="text-center">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#2a2a2a]">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962be96c83"
            alt="photographer"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Poto</h1>
        <p className="text-gray-400 mb-8">
          Explore your <span className="text-white">Capture</span>
        </p>
        <p className="text-gray-500 mb-10">
          Share your capture with Poto Gallery.
        </p>

        <Link
          to="/gallery"
          className="bg-[#f9b233] hover:bg-[#e2a329] text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
