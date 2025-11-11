import React from "react";
import { Link } from "react-router-dom";

const imageGroups = [
  {
    title: "Nature",
    images: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    ],
  },
  {
    title: "Cities",
    images: [
      "https://images.unsplash.com/photo-1546182990-237a9b5d9b6c",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1509223197845-458d87318791",
    ],
  },
  {
    title: "Abstract",
    images: [
      "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719",
      "https://images.unsplash.com/photo-1524429656589-6633a470097c",
    ],
  },
  {
    title: "Portraits",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    ],
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white px-6 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Collections</h1>
        <p className="text-gray-400 text-sm">
          Discover curated categories of stunning visuals
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageGroups.map((group, idx) => (
          <Link
            key={idx}
            to={`/category/${group.title.toLowerCase()}`}
            className="relative overflow-hidden h-60 md:h-80 group"
          >
            <img
              src={group.images[0]}
              alt={group.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <p className="text-gray-300 text-sm">
                {group.images.length} images
              </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
