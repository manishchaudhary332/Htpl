import React from "react";
import { BriefcaseBusiness, MapPin, Clock3, ArrowUpRight } from "lucide-react";

import careerHero from "../assets/Hero2.jpeg";

const jobs = [
  {
    position: "Billing Engineer",
    experience: "5+ Years",
    location: "Himachal Pradesh",
    places: "Nahan, Solan, Rampur",
    description:
      "Should have B.Tech or Diploma in Electrical Engineering with experience in electrical infrastructure projects, specifically under the RDSS scheme.",
  },
  {
    position: "Deputy Project Manager (DPM)",
    experience: "10+ Years",
    location: "Himachal Pradesh",
    places: "Nahan, Solan",
    description:
      "Should have B.Tech in Electrical Engineering to lead execution for the RDSS project.",
  },
  {
    position: "Auto CAD Engineer",
    experience: "5+ Years",
    location: "Himachal Pradesh",
    places: "Rampur, Rohru",
    description:
      "Should have B.Tech or Diploma in Electrical Engineering to support the design and planning phases of our RDSS infrastructure project.",
  },
  {
    position: "Electrical Engineer",
    experience: "3+ Years",
    location: "Himachal Pradesh",
    places: "Shimla, Solan",
    description:
      "Responsible for electrical design, site execution, inspection and coordination for infrastructure projects.",
  },
  {
    position: "Site Engineer",
    experience: "4+ Years",
    location: "Himachal Pradesh",
    places: "Nahan, Solan",
    description:
      "Responsible for site supervision, project coordination, quality control and timely execution of assigned works.",
  },
  {
    position: "Project Engineer",
    experience: "6+ Years",
    location: "Himachal Pradesh",
    places: "Multiple Locations",
    description:
      "Manage project execution, coordinate with teams and ensure projects are delivered safely, efficiently and within schedule.",
  },
];

const Career = () => {
  return (
    <main className="w-full bg-[#f8fafc] text-[#071b2b]">

      {/* ================= HERO ================= */}
      <section className="relative h-[250px] overflow-hidden sm:h-[290px] lg:h-[330px]">

        <img
          src={careerHero}
          alt="Career"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/70" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">

          <div>

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#75b843] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-white sm:text-xs">
                Join Our Team
              </span>

              <span className="h-px w-8 bg-[#75b843] sm:w-12" />
            </div>

            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Grow with Us!
            </h1>

            <p className="mt-3 text-sm text-white/90 sm:text-base">
              Build your career while building the future
            </p>

          </div>

        </div>
      </section>


      {/* ================= JOB SECTION ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#3479ad]">
            Career Opportunities
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#071b2b] sm:text-4xl">
            Find Your Next Opportunity
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Currently, we are looking for talented professionals to join our
            growing team and contribute to exciting infrastructure projects.
          </p>

        </div>


        {/* ================= JOB CARDS ================= */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {jobs.map((job, index) => (

            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#3479ad]/30 hover:shadow-[0_20px_45px_rgba(7,27,43,0.12)]"
            >

              {/* Top Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#3479ad] to-[#75b843]" />

              <div className="p-6 sm:p-7 lg:p-8">

                {/* Job Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3479ad]/10 text-[#3479ad] transition-all duration-300 group-hover:bg-[#3479ad] group-hover:text-white">
                      <BriefcaseBusiness size={23} />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#75b843]">
                        Position {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-1 text-xl font-bold text-[#071b2b] sm:text-2xl">
                        {job.position}
                      </h3>
                    </div>

                  </div>

                  {/* Number */}
                  <span className="hidden text-4xl font-black text-gray-100 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Job Details */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* Experience */}
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                    <Clock3
                      size={18}
                      className="shrink-0 text-[#3479ad]"
                    />

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Experience
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-[#071b2b]">
                        {job.experience}
                      </p>
                    </div>
                  </div>


                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                    <MapPin
                      size={18}
                      className="shrink-0 text-[#75b843]"
                    />

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Location
                      </p>

                      <p className="truncate text-sm font-semibold text-[#071b2b]">
                        {job.location}
                      </p>
                    </div>
                  </div>

                </div>


                {/* Places */}
                <p className="mt-4 text-sm text-gray-500">
                  <span className="font-semibold text-[#071b2b]">
                    Available locations:
                  </span>{" "}
                  {job.places}
                </p>


                {/* Description */}
                <div className="mt-5 border-t border-gray-100 pt-5">

                  <p className="text-sm leading-7 text-gray-600">
                    {job.description}
                  </p>

                </div>


                {/* Apply Button */}
                <div className="mt-6">

                  <button
                    type="button"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#3479ad] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#286591] hover:shadow-lg"
                  >
                    Apply Now

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:rotate-45"
                    />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#071b2b] px-5 py-14 sm:px-8 lg:py-16">

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#75b843]">
            Be Part Of Our Journey
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Grow With Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Join a team that believes in innovation, excellence and creating
            infrastructure that makes a lasting difference.
          </p>

        </div>

      </section>

    </main>
  );
};

export default Career;