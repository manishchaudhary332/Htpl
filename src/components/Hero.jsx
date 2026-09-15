import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/Hero1.jpeg";
import hero2 from "../assets/Hero2.jpeg";
import hero3 from "../assets/Hero3.webp";
import hero4 from "../assets/Hero4.webp";
import hero5 from "../assets/Hero5.webp";
import hero6 from "../assets/Hero6.webp";

const slides = [
  { image: hero1, title: "Power Distribution Infrastructure Development || Himachal Pradesh" },
  { image: hero2, title: "RSS, TSS & ASS Building with Electrification || Gujarat" },
  { image: hero3, title: "Railway Tunnels, Bridges & Track Works || Madhya Pradesh" },
  { image: hero4, title: "Bhesan Metro Depot & Workshop, Phase-I || Gujarat"},
  { image: hero5, title: "Elevated Metro ViaDuct (6.9 KM) || Maharashtra" },
  { image: hero6, title: "Design & Construction of Twin Railway Tunnel - Package 2 || Haryana" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Timer ko control karne ke liye
  const timerRef = useRef(null);

  // Auto slide ko 5 sec baad run karega
  const startAutoSlide = () => {
    // Pehle purana timer clear karo
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // 5 seconds baad next slide
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Next button
  const nextSlide = () => {
    // Existing auto timer ko turant cancel karo
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Sirf ek slide move
    setCurrent((prev) => (prev + 1) % slides.length);

    // Click ke baad 2 sec wait
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Previous button
  const prevSlide = () => {
    // Existing auto timer ko turant cancel karo
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Sirf ek slide move
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    // Click ke baad 2 sec wait
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Initial auto slide
  useEffect(() => {
    startAutoSlide();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Jab auto slide hota hai uske baad bhi next 2 sec ka timer
  useEffect(() => {
    // Agar timer already manually set hai to duplicate mat banao
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[55vh] min-h-[400px] max-h-[720px] w-full sm:h-[60vh] lg:h-[72vh]">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current
                ? "translate-x-0 opacity-100"
                : index < current
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-8 left-4 right-4 sm:bottom-10 sm:left-8 sm:right-8 lg:bottom-12 lg:left-10 lg:right-10">
              <div className="w-fit max-w-full rounded-xl bg-[#1d5148]/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:px-5 sm:py-3.5 lg:px-6 lg:py-4">
                <h1 className="text-base font-bold leading-snug text-white sm:text-xl lg:text-xl xl:text-xl">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="group absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#1d5148] sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft
            size={28}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="group absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#1d5148] sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight
            size={28}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }

                setCurrent(index);

                timerRef.current = setTimeout(() => {
                  setCurrent((prev) => (prev + 1) % slides.length);
                }, 2000);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;