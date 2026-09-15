
import { MapPin, Mail, Phone } from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans text-gray-900">

      {/* ================= TOP SECTION ================= */}
      <div className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">

            {/* Company */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                Holistic Technoengineers Private Limited
              </h2>

              <p className="mt-2 text-sm font-medium tracking-wide text-gray-600 sm:text-base">
                From Concept to Creation....
              </p>
            </div>

            {/* Social Media */}
            <div className="text-center md:ml-auto md:text-left">
              <h3 className="inline-block border-b-[3px] border-black pb-2 text-lg font-bold tracking-tight sm:text-xl">
                Social Media
              </h3>

              <div className="mt-5 flex justify-center gap-4 sm:gap-5 md:justify-start">

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaLinkedinIn
                    size={26}
                    className="text-[#0A66C2] transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaInstagram
                    size={27}
                    className="text-[#E1306C] transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaFacebookF
                    size={26}
                    className="fill-[#1877F2] text-[#1877F2] transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaYoutube
                    size={28}
                    className="text-[#FF0000] transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-center">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-50">
                <MapPin
                  size={26}
                  strokeWidth={1.8}
                  className="text-gray-900"
                />
              </div>

              <p className="pt-1 text-[15px] font-medium leading-7 tracking-wide text-gray-700 sm:text-base">
                A-57, 3rd Floor, Block A, Sector 4,
                <br className="hidden sm:block" />
                Noida, Uttar Pradesh-201301
              </p>
            </div>

            {/* Email + Phone */}
            <div className="space-y-4 md:ml-auto">

              <a
                href="mailto:info@holistictechno.in"
                className="group flex items-center gap-4 text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover:bg-blue-50">
                  <Mail size={23} strokeWidth={1.8} />
                </div>

                <span className="text-[15px] font-medium tracking-wide sm:text-base">
                  info@holistictechno.in
                </span>
              </a>

              <a
                href="tel:01204233296"
                className="group flex items-center gap-4 text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover:bg-blue-50">
                  <Phone size={23} strokeWidth={1.8} />
                </div>

                <span className="text-[15px] font-medium tracking-wide sm:text-base">
                  0120-4233296
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="border-t border-gray-200 bg-[#f3f3f3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          {/* Copyright */}
          <p className="text-center text-[13px] font-medium tracking-wide text-gray-600 sm:text-sm md:text-left">
            Designed &amp; Maintained By © Holistic Technoengineers Private Limited
          </p>

          {/* Links */}
          <div className="flex items-center justify-center gap-3 text-[13px] font-medium sm:text-sm">

            <a
              href="/faq"
              className="text-gray-600 transition-colors duration-300 hover:text-black"
            >
              FAQ
            </a>

            <span className="h-5 w-px bg-gray-400" />

            <a
              href="/privacy-policy"
              className="text-gray-600 transition-colors duration-300 hover:text-black"
            >
              Privacy Policy
            </a>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

