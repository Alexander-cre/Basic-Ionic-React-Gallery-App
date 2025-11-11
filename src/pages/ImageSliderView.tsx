import React, { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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

const ImageSliderView: React.FC = () => {
  // ✅ Use hooks inside the component
  const history = useHistory();
  const { name, index } = useParams<{ name: string; index: string }>();
  const images = imageGroups[name?.toLowerCase() || ""] || [];
  const [currentIndex, setCurrentIndex] = useState(parseInt(index || "0", 10));

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "auto",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (i: number) => {
    if (i < 0 || i >= images.length) return;
    setCurrentIndex(i);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: i * window.innerWidth,
        behavior: "auto",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) scrollToImage(currentIndex + 1);
    else if (distance < -threshold) scrollToImage(currentIndex - 1);

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <button
        onClick={() => history.goBack()}
        className="absolute top-5 left-5 z-20 text-gray-300 hover:text-white"
      >
        <ArrowLeft size={28} />
      </button>

      <div
        ref={sliderRef}
        className="flex w-full h-full overflow-x-hidden snap-x snap-mandatory"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-screen h-full snap-center flex items-center justify-center"
          >
            <img
              src={src}
              alt={`${name}-${i}`}
              className="w-full h-full object-contain transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollToImage(currentIndex - 1)}
        disabled={currentIndex === 0}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full transition ${
          currentIndex === 0 ? "opacity-30 cursor-default" : "hover:bg-black/70"
        }`}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => scrollToImage(currentIndex + 1)}
        disabled={currentIndex === images.length - 1}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full transition ${
          currentIndex === images.length - 1
            ? "opacity-30 cursor-default"
            : "hover:bg-black/70"
        }`}
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 px-4 py-2 rounded-full text-sm text-gray-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSliderView;
