import React, { useState } from "react";
import { Link } from "react-router-dom";
import holistic_logo from "../assets/holistic_logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setProjectsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 lg:px-8">

          {/* ================= NAVBAR ================= */}
          <div className="flex h-[68px] items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 shadow-[0_8px_30px_rgba(0,0,0,0.07)] sm:px-6">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group flex shrink-0 items-center"
              aria-label="Holistic Home"
            >
              <img
                src={holistic_logo}
                alt="Holistic"
                className="h-auto w-[100px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:w-[110px] md:w-[118px]"
              />
            </Link>


            {/* ================= DESKTOP NAVBAR ================= */}
            <div className="hidden items-center gap-1 md:flex">

              {/* HOME */}
              <Link
                to="/"
                className="relative rounded-xl bg-[#3479ad]/[0.07] px-4 py-2.5 text-[13px] font-bold text-[#3479ad] transition-all duration-300 hover:bg-[#3479ad]/[0.12]"
              >
                Home
              </Link>


              {/* ================= ABOUT US ================= */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setAboutOpen((prev) => !prev);
                    setProjectsOpen(false);
                  }}
                  className={`group flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                    aboutOpen
                      ? "bg-[#3479ad]/[0.07] text-[#3479ad]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#3479ad]"
                  }`}
                >
                  About Us

                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>


                {/* ABOUT DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-full z-50 w-[205px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                    aboutOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

                    <Link
                      to="/about-us"
                      onClick={() => {
                        setAboutOpen(false);
                        closeMobileMenu();
                      }}
                      className="group flex items-center rounded-xl px-4 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-[#3479ad]/[0.06] hover:text-[#3479ad]"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#75b843] opacity-0 transition-opacity group-hover:opacity-100" />
                      Who We Are
                    </Link>

                    <Link
                      to="/about-us/leadership"
                      onClick={() => {
                        setAboutOpen(false);
                        closeMobileMenu();
                      }}
                      className="group flex items-center rounded-xl px-4 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-[#3479ad]/[0.06] hover:text-[#3479ad]"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#75b843] opacity-0 transition-opacity group-hover:opacity-100" />
                      Leadership
                    </Link>

                    <Link
                      to="/about-us/csr"
                      onClick={() => {
                        setAboutOpen(false);
                        closeMobileMenu();
                      }}
                      className="group flex items-center rounded-xl px-4 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-[#3479ad]/[0.06] hover:text-[#3479ad]"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#75b843] opacity-0 transition-opacity group-hover:opacity-100" />
                      CSR
                    </Link>

                  </div>
                </div>
              </div>


              {/* ================= PROJECTS ================= */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setProjectsOpen((prev) => !prev);
                    setAboutOpen(false);
                  }}
                  className={`group flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                    projectsOpen
                      ? "bg-[#3479ad]/[0.07] text-[#3479ad]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#3479ad]"
                  }`}
                >
                  Projects

                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      projectsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>


                {/* PROJECTS DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-full z-50 w-[215px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                    projectsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

                    <Link
                      to="/projects/ongoing"
                      onClick={() => {
                        setProjectsOpen(false);
                        closeMobileMenu();
                      }}
                      className="group flex items-center rounded-xl px-4 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-[#3479ad]/[0.06] hover:text-[#3479ad]"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#75b843] opacity-0 transition-opacity group-hover:opacity-100" />
                      Ongoing Projects
                    </Link>

                    <Link
                      to="/projects/completed"
                      onClick={() => {
                        setProjectsOpen(false);
                        closeMobileMenu();
                      }}
                      className="group flex items-center rounded-xl px-4 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-[#3479ad]/[0.06] hover:text-[#3479ad]"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#75b843] opacity-0 transition-opacity group-hover:opacity-100" />
                      Completed Projects
                    </Link>

                  </div>
                </div>
              </div>


              {/* CAREER */}
              <Link
                to="/career"
                className="rounded-xl px-4 py-2.5 text-[13px] font-bold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-[#3479ad]"
              >
                Career
              </Link>


              {/* CONTACT */}
              <Link
                to="/contact-us"
                className="ml-1 rounded-xl bg-[#3479ad] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_5px_15px_rgba(52,121,173,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#286591] hover:shadow-[0_7px_20px_rgba(52,121,173,0.35)]"
              >
                Contact Us
              </Link>

            </div>


            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-all duration-300 hover:bg-[#3479ad]/10 hover:text-[#3479ad] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              mobileOpen
                ? "max-h-[650px] pt-3 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_8px_25px_rgba(0,0,0,0.06)]">

              {/* HOME */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-xl bg-[#3479ad]/[0.06] px-4 py-3.5 text-sm font-bold text-[#3479ad]"
              >
                Home
              </Link>


              {/* ABOUT */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setAboutOpen((prev) => !prev);
                    setProjectsOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  About Us

                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>

                <div
                  className={`ml-3 overflow-hidden border-l-2 border-[#75b843]/50 pl-3 transition-all duration-300 ${
                    aboutOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    to="/about-us"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#3479ad]"
                  >
                    Who We Are
                  </Link>

                  <Link
                    to="/about-us/leadership"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#3479ad]"
                  >
                    Leadership
                  </Link>

                  <Link
                    to="/about-us/csr"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#3479ad]"
                  >
                    CSR
                  </Link>
                </div>
              </div>


              {/* PROJECTS */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setProjectsOpen((prev) => !prev);
                    setAboutOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Projects

                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      projectsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>

                <div
                  className={`ml-3 overflow-hidden border-l-2 border-[#75b843]/50 pl-3 transition-all duration-300 ${
                    projectsOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    to="/projects/ongoing"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#3479ad]"
                  >
                    Ongoing Projects
                  </Link>

                  <Link
                    to="/projects/completed"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#3479ad]"
                  >
                    Completed Projects
                  </Link>
                </div>
              </div>


              {/* CAREER */}
              <Link
                to="/career"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Career
              </Link>


              {/* CONTACT */}
              <Link
                to="/contact-us"
                onClick={closeMobileMenu}
                className="mt-1 block rounded-xl bg-[#3479ad] px-4 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#286591]"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;