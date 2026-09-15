
import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

// Hero image
import completedHero from "../assets/csr6.jpeg";

// Apni 6 project images yahan import karo
import project1 from "../assets/comp1.png";
import project2 from "../assets/camp2.png";
import project3 from "../assets/camp3.png";
import project4 from "../assets/Hero2.jpeg";
import project5 from "../assets/Hero3.webp";
import project6 from "../assets/Hero4.webp";

const projects = [
  {
    image: project1,
    title: "TMSD Workshop, Gujarat",
  },
  {
    image: project2,
    title: "FOB Project, Gujarat",
  },
  {
    image: project3,
    title: "RVNL Office, Gujarat",
  },
  {
    image: project4,
    title: "Metro Project, Gujarat",
  },
  {
    image: project5,
    title: "Railway Infrastructure, Gujarat",
  },
  {
    image: project6,
    title: "Station Development, Gujarat",
  },
];

const CompletedProjects = () => {
  return (
    <main className="w-full bg-white font-sans text-[#071b2b]">

      {/* ================= HERO ================= */}
      <section className="relative h-[250px] overflow-hidden sm:h-[290px] lg:h-[330px]">

        <img
          src={completedHero}
          alt="Completed Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/65" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">

          <div>

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#75b843] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-white sm:text-xs">
                Our Achievements
              </span>

              <span className="h-px w-8 bg-[#75b843] sm:w-12" />
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Completed Projects
            </h1>

            <p className="mt-3 text-sm font-medium text-white/90 sm:text-base">
              Delivering excellence, project after project
            </p>

          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="relative border-l-4 border-[#3479ad] pl-5 sm:pl-7">

          <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            We have successfully transformed visions into reality, creating
            infrastructure and built environments that meet the highest
            standards of quality, functionality, and sustainability. Each
            completed project showcases our ability to overcome challenges,
            adhere to timelines, maintain safety standards, and exceed client
            expectations.
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Our portfolio represents not just structures and developments, but
            enduring partnerships built on trust, reliability, and performance.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {projects.map((project, index) => (

            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative h-[220px] overflow-hidden sm:h-[230px] lg:h-[240px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/60 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#3479ad] shadow-md backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* ================= CARD FOOTER ================= */}
              <div className="flex min-h-[72px] items-center justify-between gap-3 bg-[#071b2b] px-4 py-4 sm:px-5">

                <div className="flex min-w-0 items-center gap-2.5">

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


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#071b2b] px-5 py-14 sm:px-8 lg:py-16">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#75b843]">
            Our Track Record
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built With Quality. Delivered With Trust.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Every completed project reflects our commitment to engineering
            excellence, safety, reliability and lasting value.
          </p>

        </div>

      </section>

    </main>
  );
};

export default CompletedProjects;

