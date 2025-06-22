import lessonBanner2 from '../../assets/lessonHeader1.webp'; // Replace with your image
import React from 'react';
import { Link } from 'react-router-dom';

export default function Lesson2() {
  return (
    <div className="w-full">
      {/* ✅ HEADER BANNER WITH DARK OVERLAY */}
      <div
        className="relative w-screen h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${lessonBanner2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Lesson 2: Welcome to the Journey
          </h1>
        </div>
      </div>

      {/* ✅ LESSON CONTENT */}
      <div className="w-[90%] max-w-4xl mx-auto py-10 space-y-6 text-base sm:text-lg text-gray-800">
        <p>
          Welcome to Lesson 1. In this module, you'll explore the origins of Pride Month, understand key historical events, and reflect on the significance of collective action.
        </p>
        <p>
          We’ll begin by learning about the Stonewall uprising, its cultural context, and its legacy in shaping global LGBTQ+ activism.
        </p>
        {/* Add more content blocks, activities, or callouts as needed */}
      </div>

      {/* ✅ NAVIGATION CONTROLS */}
      <div className="w-[90%] max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-8">
        <Link
          to="/module1/lesson1"
          className="w-full sm:w-auto text-center bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded transition"
        >
          ← Previous Lesson
        </Link>

        <Link
          to="/module1/lesson2"
          className="w-full sm:w-auto text-center bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded transition"
        >
          Next Lesson →
        </Link>
      </div>
    </div>
  );
}
