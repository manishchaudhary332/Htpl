
import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

// Apni images yahan import kar lena
import projectHero from "../assets/Hero3.webp";

import project1 from "../assets/img1.webp";
import project2 from "../assets/img2.webp";
import project3 from "../assets/img-3.webp";
import project4 from "../assets/img4.jpeg";
import project5 from "../assets/img5.webp";
import project6 from "../assets/img6.jpeg";
import project7 from "../assets/img7.webp";
import project8 from "../assets/img8.webp";
import project9 from "../assets/img9.webp";
import project10 from "../assets/img10.webp";
import project11 from "../assets/img-11.png";
import project12 from "../assets/img12.webp";

const projects = [
  {
    image: project1,
    title: "Metro Depot, Gujarat",
  },
  {
    image: project2,
    title: "Elevated Viaduct, Maharashtra",
  },
  {
    image: project3,
    title: "At-Grade Metro Station, Maharashtra",
  },
  {
    image: project4,
    title: "River Bridge, Gujarat",
  },
  {
    image: project5,
    title: "Highway Development, Rajasthan",
  },
  {
    image: project6,
    title: "Metro Station, Uttar Pradesh",
  },
  {
    image: project7,
    title: "Water Treatment Plant, Gujarat",
  },
  {
    image: project8,
    title: "Industrial Plant, Maharashtra",
  },
  {
    image: project9,
    title: "Railway Yard, Haryana",
  },
  {
    image: project10,
    title: "Urban Development, Gujarat",
  },
  {
    image: project11,
    title: "Port Construction, Odisha",
  },
  {
    image: project12,
    title: "Metro Viaduct, Karnataka",
  },
];

const OngoingProjects = () => {
  return (
    <main className="w-full bg-white font-sans text-[#071b2b]">

      {/* ================= HERO ================= */}
      <section className="relative h-[250px] overflow-hidden sm:h-[300px] lg:h-[330px]">

        <img
          src={projectHero}
          alt="Ongoing Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/65" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div>

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#75b843] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-white sm:text-xs">
                Our Work In Progress
              </span>

              <span className="h-px w-8 bg-[#75b843] sm:w-12" />
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Ongoing Projects...
            </h1>

            <p className="mt-3 text-sm font-medium text-white/90 sm:text-base">
              Building today for a stronger tomorrow
            </p>

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="relative border-l-4 border-[#3479ad] pl-5 sm:pl-7">

          <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Across multiple locations, we are creating infrastructure that not
            only addresses present-day requirements but also contributes to
            long-term growth and development. Our ongoing projects reflect the
            strength of our experience, expertise, and commitment to delivering
            excellence across diverse locations.
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            As we continue to expand our footprint, our ongoing projects stand
            as a testament to our dedication, innovation, and unwavering
            commitment to building a better future—one project at a time.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {projects.map((project, index) => (

            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
            >

              {/* Image */}
              <div className="relative h-[220px] overflow-hidden sm:h-[230px] lg:h-[240px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/60 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#3479ad] shadow-md backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* Bottom Content */}
              <div className="flex min-h-[70px] items-center justify-between gap-3 bg-[#071b2b] px-4 py-4 sm:px-5">

                <div className="flex min-w-0 items-center gap-2">

                  <MapPin
                    size={19}
                    strokeWidth={2.5}
                    className="shrink-0 text-[#75b843]"
                  />

                  <h2 className="truncate text-sm font-semibold text-white sm:text-base">
                    {project.title}
                  </h2>

                </div>


                {/* Arrow */}
                <button
                  type="button"
                  aria-label={`View ${project.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3479ad] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#75b843]"
                >
                  <ArrowUpRight size={18} />
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#071b2b] px-5 py-14 sm:px-8 lg:py-16">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#75b843]">
            Building The Future
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Infrastructure That Makes A Difference
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Every project represents our commitment to quality, innovation,
            sustainability and long-term development.
          </p>

        </div>

      </section>

    </main>
  );
};

export default OngoingProjects;

