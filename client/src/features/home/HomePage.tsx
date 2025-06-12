import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-gradient-to-br from-[#182a73] via-[#218aae] to-[#20a7ac] text-white">
      {/* Icon and Title Row */}
      <div className="flex items-center gap-6">
        {/* Replace with your preferred icon or SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-8 0m8 0v0zM4 10a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
        <h1 className="text-6xl font-bold">Reactivities</h1>
      </div>

      {/* Subtitle */}
      <h2 className="text-4xl">Welcome to reactivities</h2>

      {/* Link Button */}
      <Link to="/activities">
        <button className="bg-white text-[#182a73] hover:bg-gray-200 transition font-semibold py-4 px-8 rounded-2xl text-2xl">
          Take me to the activities!
        </button>
      </Link>
    </div>
  );
}
