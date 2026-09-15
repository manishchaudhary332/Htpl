
import React from "react";
import {
  Target,
  Eye,
  Users,
  Award,
} from "lucide-react";

// Apni image yahan import karo
import aboutus from "../assets/aboutus.webp";

const Aboutus = () => {
  return (
    <main className="w-full bg-white text-gray-900 font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[350px] lg:h-[390px]">

        {/* Background Image */}
        <img
          src={aboutus}
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/75" />

        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061522]/80 via-transparent to-[#061522]/70" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <div className="text-center">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              Who We Are
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Us
            </h1>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-white" />

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="max-w-6xl">

            <p className="text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
              <span className="font-bold text-gray-950">
                Holistic Technoengineers Private Limited
              </span>{" "}
              is an infrastructure development company committed to delivering
              innovative, sustainable and high-quality solutions across diverse
              sectors of infrastructure.
            </p>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
              <span className="font-semibold text-gray-900">
                From Concept to Creation
              </span>{" "}
              is a company driven by a holistic approach to construction and
              infrastructure development. We transform ideas into enduring
              realities by seamlessly integrating planning, design, engineering,
              and execution.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
              Our commitment is to deliver sustainable, innovative, and
              high-quality infrastructure solutions that create lasting value
              for communities, businesses, and stakeholders. From the initial
              concept to the final creation, we ensure excellence, efficiency,
              and integrity at every stage of the journey.
            </p>

          </div>
        </div>
      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="bg-[#f6f7f8]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

            {/* Vision */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white">
                  <Eye size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Our Direction
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Vision
                  </h2>
                </div>

              </div>

              <p className="text-[15px] leading-8 text-gray-600 sm:text-base">
                Our vision is to become a leading force in techno-engineering
                and development by creating innovative, sustainable, and
                future-ready solutions that contribute to infrastructure and
                industrial progress while protecting the environment and
                improving the quality of life for people.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 sm:text-base">
                We aim to build a smarter, greener, and more sustainable future
                for generations to come.
              </p>

            </div>


            {/* Mission */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white">
                  <Target size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What Drives Us
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Mission
                  </h2>
                </div>

              </div>

              <p className="text-[15px] leading-8 text-gray-600 sm:text-base">
                To deliver excellent infrastructure solutions through
                innovative engineering, advanced technology, and sustainable
                development practices.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 sm:text-base">
                We are committed to executing high-quality projects with
                excellence, integrity, and efficiency while contributing to
                nation-building, enhancing connectivity, empowering
                communities, and creating long-term value.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= VALUES & CULTURE ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

            {/* Values */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                  <Award size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What We Believe
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Our Values
                  </h2>
                </div>

              </div>

              <p className="text-[15px] leading-8 text-gray-600 sm:text-base">
                Our values are rooted in integrity, excellence, safety,
                innovation, and teamwork. We are committed to delivering
                sustainable infrastructure solutions through responsible
                engineering practices and reliable execution. Driven by quality
                and accountability, we strive to create long-term value for our
                clients, communities, and the nation through every project we
                undertake.
              </p>

            </div>


            {/* Culture */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                  <Users size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    How We Work
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Our Culture
                  </h2>
                </div>

              </div>

              <p className="text-[15px] leading-8 text-gray-600 sm:text-base">
                Our culture is built on collaboration, respect, continuous
                learning, and a shared commitment to excellence. We foster an
                environment where innovation, teamwork, and professional growth
                empower our people to perform at their best. By valuing every
                contribution and encouraging strong relationships across teams
                and sites, we create a workplace driven by purpose, integrity,
                and mutual success.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#071b2b]">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 sm:py-14 lg:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            From Concept to Creation
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Building a Better Future Through Engineering
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Delivering innovative, sustainable and reliable infrastructure
            solutions that create lasting value.
          </p>

        </div>
      </section>

    </main>
  );
};


/* ================= VALUE ITEM ================= */

const ValueItem = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition-all duration-300 hover:bg-gray-100">
      <div className="text-gray-800">
        {icon}
      </div>

      <span className="text-sm font-semibold text-gray-800">
        {title}
      </span>
    </div>
  );
};

export default Aboutus;

