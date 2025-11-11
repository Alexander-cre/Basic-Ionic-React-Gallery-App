import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const imageGroups: Record<string, string[]> = {
  nature: [
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
  ],
  cities: [
    "https://images.unsplash.com/photo-1546182990-237a9b5d9b6c",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1509223197845-458d87318791",
  ],
  abstract: [
    "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    "https://images.unsplash.com/photo-1532009324734-20a7a5813719",
    "https://images.unsplash.com/photo-1524429656589-6633a470097c",
  ],
};

const CategoryView: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  const images = imageGroups[name?.toLowerCase() || ""] || [];


  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="flex items-center px-6 pt-10">
        <Link to="/" className="mr-4 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={32} />
        </Link>
        <h1 className="text-2xl font-semibold capitalize">{name}</h1>
      </header>

      <main className="px-6 mt-8 pb-20">
        {images.length === 0 ? (
          <p className="text-gray-500">No images available for {name}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl aspect-[4/5] shadow-lg cursor-pointer"
                onClick={() => history.push(`/slider/${name.toLowerCase()}/${index}`)}
              >
                <img
                  src={src}
                  alt={`${name}-${index}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
export default CategoryView;
