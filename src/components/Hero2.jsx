
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Settings,
  UserRound,
} from "lucide-react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

// Temporary: replace these with your actual logo8 and logo9 files later.
const logo8 = logo7;
const logo9 = logo7;

const Hero2 = () => {
  const logos = [
    { id: 1, name: "Nagpur Metro", image: logo1 },
    { id: 2, name: "Aurangabad Municipal Corporation", image: logo2 },
    { id: 3, name: "NHAI", image: logo3 },
    { id: 4, name: "Ahmedabad Metro", image: logo4 },
    { id: 5, name: "Himachal Pradesh", image: logo5 },
    { id: 6, name: "Rail Vikas Nigam Limited", image: logo6 },
    { id: 7, name: "Connectivity for Immense Opportunities", image: logo7 },
    { id: 8, name: "Organization 8", image: logo8 },
    { id: 9, name: "Organization 9", image: logo9 },
  ];

  const highlights = [
    { icon: Building2, number: "25+", title: "Projects" },
    { icon: Users, number: "20+", title: "Happy Client" },
    { icon: Settings, number: "10", title: "Years of Experience" },
    { icon: UserRound, number: "150+", title: "Professional Team" },
  ];

  // Duplicate the logos so Logo 9 -> Logo 1 feels completely seamless.
  const sliderLogos = [...logos, ...logos];

  const viewportRef = useRef(null);
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(7);
  const [isPaused, setIsPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  // Keep exactly one line and calculate the real width of one logo.
  useEffect(() => {
    const updateSlider = () => {
      const width = viewportRef.current?.clientWidth || 0;
      const count =
        window.innerWidth >= 1024
          ? 7
          : window.innerWidth >= 768
          ? 4
          : 2;

      setVisibleCount(count);
      setItemWidth(width / count);
    };

    updateSlider();

    const resizeObserver = new ResizeObserver(updateSlider);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateSlider);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  const nextSlide = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      // Jump to the equivalent cloned position without animation,
      // then move one slide left normally.
      setAnimate(false);
      setCurrentIndex(logos.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setCurrentIndex(logos.length - 1);
        });
      });

      return;
    }

    setAnimate(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Auto slide: 1 second pause + 700ms smooth movement.
  useEffect(() => {
    if (isPaused || currentIndex >= logos.length) return;

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 2200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  // After Logo 9 reaches the first cloned position, reset invisibly.
  useEffect(() => {
    if (currentIndex !== logos.length) return;

    const resetTimer = setTimeout(() => {
      setAnimate(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }, 700);

    return () => clearTimeout(resetTimer);
  }, [currentIndex]);

  return (
    <section className="w-full overflow-hidden bg-white font-sans">

      {/* CLIENT / ORGANIZATION LOGOS */}
      <div
        className="relative bg-white py-7 sm:py-8 lg:py-9"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="mx-auto mb-6 flex max-w-[1800px] items-center gap-4 px-5 sm:px-8 lg:px-12">
          <span className="h-[5px] w-10 shrink-0 rounded-full bg-slate-900 sm:w-12" />

          <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
            Proudly serving reputed organizations with reliable, sustainable,
            and high-quality engineering solutions.
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1800px] px-10 sm:px-14 lg:px-16">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            aria-label="Previous organizations"
            className="absolute left-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition-all duration-300 hover:-translate-x-1 hover:bg-slate-900 hover:text-white sm:left-2 sm:h-11 sm:w-11"
          >
            <ChevronLeft size={22} />
          </button>

          {/* ONE-LINE LOGO SLIDER */}
          <div ref={viewportRef} className="overflow-hidden">
            <div
              className={`flex w-max ${
                animate
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translate3d(-${
                  currentIndex * itemWidth
                }px, 0, 0)`,
              }}
            >
              {sliderLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  style={{ width: `${itemWidth}px` }}
                  className="shrink-0 px-1.5 sm:px-2"
                >
                  <div className="flex h-24 w-full items-center justify-center rounded-xl border border-slate-100 bg-white px-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-28 lg:h-32">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-h-[75%] max-w-[90%] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            aria-label="Next organizations"
            className="absolute right-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-slate-900 hover:text-white sm:right-2 sm:h-11 sm:w-11"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* KEY HIGHLIGHTS */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#123b2b] via-[#092c2c] to-[#031a2b]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

          <div className="mb-8 flex items-center gap-4 sm:mb-11">
            <span className="h-[4px] w-12 rounded-full bg-white sm:w-20" />

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Key Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.10] sm:px-6 sm:py-8"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0b3029] sm:h-20 sm:w-20">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {item.number}
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white/90 sm:text-lg">
                    {item.title}
                  </p>

                  <div className="mx-auto mt-4 h-[2px] w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white" />
                </div>
              );
            })}
          </div>
        </div>

        {/* GET IN TOUCH */}
        <div className="border-t border-white/10 bg-white/[0.08]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

            <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Get in Touch With us
            </h3>

            <button className="hidden rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0b3029] sm:block">
              Contact Us
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

