import React from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import contactHero from "../assets/contact.webp";

const Contact = () => {
  return (
    <main className="w-full bg-[#f8fafc] font-sans text-[#071b2b]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative h-[250px] overflow-hidden sm:h-[290px] lg:h-[330px]">

        <img
          src={contactHero}
          alt="Work with us"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2b]/10" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">

          <div>

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#75b843] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-white sm:text-xs">
                Let's Work Together
              </span>

              <span className="h-px w-8 bg-[#75b843] sm:w-12" />
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Work with Us
            </h1>

            <p className="mt-3 text-sm text-white/90 sm:text-base">
              Let's build something remarkable together
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#3479ad]">
            Start a Conversation
          </span>

          <h2 className="mt-3 text-2xl font-bold uppercase text-[#071b2b] sm:text-3xl lg:text-4xl">
            Have an Upcoming Project? Let's Build It Together.
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#75b843]" />

        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center">

            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3479ad]/10 text-[#3479ad]">
              <Send size={25} />
            </div>

            <h3 className="text-2xl font-bold text-[#071b2b] sm:text-3xl">
              Let's Bring Your Ideas to Life
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Partner with HTPL to bring your ideas to life. Whether it's a
              large-scale infrastructure project or a specialized engineering
              solution, we're here to provide expertise, quality, and
              innovation at every step.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We invite you to engage with us, explore potential collaborations,
              and discover how we can contribute to the future. For inquiries,
              partnerships, or more information, please feel free to reach out
              to our team.
            </p>


            {/* Contact Details */}
            <div className="mt-8 space-y-4">

              {/* Address */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#75b843]/10 text-[#75b843]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Our Office
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b2b]">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3479ad]/10 text-[#3479ad]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b2b]">
                    info@holistictechnoengineers.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#75b843]/10 text-[#75b843]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b2b]">
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <div className="relative">

            {/* Decorative background */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#75b843]/10 blur-2xl" />
            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-[#3479ad]/10 blur-2xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(7,27,43,0.10)] sm:p-8 lg:p-10">

              <div className="mb-7">

                <span className="text-xs font-bold uppercase tracking-[3px] text-[#75b843]">
                  Contact Form
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#071b2b]">
                  Tell Us About Your Project
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Fill in the details below and our team will get back to you.
                </p>

              </div>


              <form className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071b2b]">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#3479ad] focus:bg-white focus:ring-4 focus:ring-[#3479ad]/10"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071b2b]">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#3479ad] focus:bg-white focus:ring-4 focus:ring-[#3479ad]/10"
                  />
                </div>


                {/* Phone + Company */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#071b2b]">
                      Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#3479ad] focus:bg-white focus:ring-4 focus:ring-[#3479ad]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#071b2b]">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#3479ad] focus:bg-white focus:ring-4 focus:ring-[#3479ad]/10"
                    />
                  </div>

                </div>


                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071b2b]">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#3479ad] focus:bg-white focus:ring-4 focus:ring-[#3479ad]/10"
                  />
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3479ad] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#3479ad]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#286591] hover:shadow-xl"
                >
                  Submit Inquiry

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP SECTION
      ===================================================== */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-7 text-center">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#3479ad]">
              Find Us
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#071b2b]">
              Our Location
            </h2>

          </div>


          {/* Map */}
          <div className="group relative h-[300px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 shadow-[0_15px_40px_rgba(7,27,43,0.10)] sm:h-[400px] lg:h-[480px]">

            {/* Replace this iframe with your actual Google Maps embed */}
            <iframe
              title="Holistic Technoengineers Location"
              src="https://www.google.com/maps?q=Noida%20Uttar%20Pradesh&output=embed"
              className="h-full w-full border-0 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
            />

            {/* Location Badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3479ad] text-white">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Holistic Technoengineers
                </p>

                <p className="text-sm font-bold text-[#071b2b]">
                  Noida, Uttar Pradesh
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#071b2b] px-5 py-14 sm:px-8 lg:py-16">

        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#75b843]">
            Let's Build Together
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Your Vision. Our Expertise.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Let's work together to create innovative, reliable and sustainable
            infrastructure for a better tomorrow.
          </p>

        </div>

      </section>

    </main>
  );
};

export default Contact;