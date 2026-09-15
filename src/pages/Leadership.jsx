import React from "react";
import {
  Users,
} from "lucide-react";


import jatin from "../assets/jatin.png"
import Aditya from "../assets/Aditya.png"
import cta from "../assets/cta.webp"

const Leadership = () => {
  return (
    <main className="min-h-screen bg-white font-['Inter'] text-gray-900">

         {/* HERO SECTION*/}
     
      <section className="relative flex h-[280px] items-center justify-center overflow-hidden sm:h-[330px] lg:h-[360px]">

        {/* Hero Background */}
        <img
  src={cta}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover object-center"
/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/10" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061522]/80 via-transparent to-[#061522]/80" />

        {/* Hero Content */}
        <div className="relative z-10 px-5 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/70" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs">
              Our Leadership
            </span>

            <span className="h-px w-10 bg-white/70" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Leadership
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-white/75 sm:text-base">
            Visionary leadership shaping a better and more sustainable future.
          </p>

        </div>
      </section>


      {/* =====================================================
          BOARD OF DIRECTORS
      ===================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* Section Heading */}
          <div className="mb-12 flex items-center gap-4 sm:mb-16">

            <div className="h-[4px] w-10 rounded-full bg-[#3479ad] sm:w-12" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3479ad] sm:text-xs">
                Our Team
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#071b2b] sm:text-4xl">
                Board Of Directors
              </h2>
            </div>

          </div>


          {/* =====================================================
              JATIN KUMAR
          ===================================================== */}
          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">

            {/* Image */}
            <div className="relative mx-auto w-full max-w-[330px]">

              {/* Decorative Shape */}
              <div className="absolute -left-5 top-10 h-40 w-24 rounded-2xl bg-[#3479ad]/10 sm:-left-7" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.10)]">

                {/* Replace src with your image */}
                <img
                  src={jatin}
                  alt="Mr. Jatin Kumar"
                  className="h-[400px] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03] sm:h-[430px]"
                />

              </div>

            </div>


            {/* Content */}
            <div>

              {/* Label */}
              <div className="mb-4 flex items-center gap-3">

                <span className="h-[3px] w-10 rounded-full bg-[#3479ad]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3479ad]">
                  Board Of Directors
                </span>

              </div>


              {/* Name */}
              <h3 className="text-3xl font-bold tracking-tight text-[#071b2b] sm:text-4xl">
                Mr. Jatin Kumar
              </h3>


              {/* Position */}
              <p className="mt-2 text-base font-semibold text-gray-500 sm:text-lg">
                Founder & Managing Director
              </p>


              {/* Small Line */}
              <div className="mt-5 h-[3px] w-16 rounded-full bg-[#071b2b]" />


              {/* Bio */}
              <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-600 sm:text-base">

                <p>
                  A visionary and socially driven professional with an M.Tech
                  degree, he has always been passionate about creating
                  meaningful change for people, society, and the environment.
                  Guided by a strong sense of social responsibility, he has
                  consistently pursued initiatives aimed at improving community
                  welfare.
                </p>

                <p>
                  He opened an educational institution named{" "}
                  <strong className="font-semibold text-gray-800">
                    “R.V Institute of Technology”
                  </strong>{" "}
                  in Bijnor, Uttar Pradesh to empower future generations.
                </p>

                <p>
                  Beside this, with a deep commitment to public health and
                  sustainability, he founded{" "}
                  <strong className="font-semibold text-gray-800">
                    “Pi-Lo”
                  </strong>{" "}
                  with the mission of providing free safe drinking water to
                  those in need.
                </p>

                <p>
                  He also came up with innovative solutions towards treatment
                  of sewage as well as water recycling. Combining technical
                  expertise with a holistic vision for development, he later
                  established{" "}
                  <strong className="font-semibold text-gray-800">
                    “Holistic Technoengineers Private Limited”
                  </strong>
                  , an Infrastructure Development EPC company dedicated to
                  delivering environmentally responsible and sustainable
                  engineering solutions.
                </p>

                <p>
                  Through his leadership, the company reflects his core
                  philosophy of integrating technology, infrastructure, and
                  nature for the betterment of society and the environment.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              DIVIDER
          ===================================================== */}
          <div className="my-16 h-px bg-gray-200 sm:my-20" />


          {/* =====================================================
              ADITYA CHAUDHARY
          ===================================================== */}
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">

  {/* Image */}
  <div className="relative mx-auto w-full max-w-[330px] lg:order-2">

    {/* Decorative Shape */}
    <div className="absolute -right-5 top-10 h-40 w-24 rounded-2xl bg-[#3479ad]/10 sm:-right-7" />

    {/* Image Container */}
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.10)]">

      <img
        src={Aditya}
        alt="Mr. Aditya Chaudhary"
        className="h-[400px] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03] sm:h-[430px]"
      />

    </div>

  </div>


  {/* Content */}
  <div className="lg:order-1">

    {/* Label */}
    <div className="mb-4 flex items-center gap-3">

      <span className="h-[3px] w-10 rounded-full bg-[#3479ad]" />

      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3479ad]">
        Board Of Directors
      </span>

    </div>


    {/* Name */}
    <h3 className="text-3xl font-bold tracking-tight text-[#071b2b] sm:text-4xl">
      Mr. Aditya Chaudhary
    </h3>


    {/* Position */}
    <p className="mt-2 text-base font-semibold text-gray-500 sm:text-lg">
      Director
    </p>


    {/* Line */}
    <div className="mt-5 h-[3px] w-16 rounded-full bg-[#071b2b]" />


    {/* Bio */}
    <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-600 sm:text-base">

      <p>
        With a strong academic background and a passion for
        infrastructure and sustainable development, Mr. Aditya
        Chaudhary brings valuable expertise to the organization.
      </p>

      <p>
        His focus lies in driving innovation, ensuring operational
        excellence, and contributing to the company’s long-term
        vision. He believes in building strong teams, fostering
        collaboration, and creating solutions that make a lasting
        impact on communities and the environment.
      </p>

    </div>

  </div>

</div>

        </div>
      </section>


      {/* =====================================================
          LEADERSHIP PHILOSOPHY
      ===================================================== */}
      <section className="bg-[#071b2b]">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <Users size={27} strokeWidth={1.7} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#7db9df]">
            Our Philosophy
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Leadership that connects innovation, people and sustainability.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            We believe that responsible leadership creates meaningful
            infrastructure and lasting value for communities and future
            generations.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Leadership;