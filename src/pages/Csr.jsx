import React from "react";
import {
    ArrowRight,
    HeartHandshake,
    HandHeart,
    Users,
    Droplets,
} from "lucide-react";

// =====================================================
// APNI IMAGES YAHAN IMPORT KAR SAKTE HO
// =====================================================

// import csrHero from "../assets/CSR.jpeg";

import student from "../assets/student.png";
import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";
import site4 from "../assets/site4.png";
import site5 from "../assets/site5.png";
import site6 from "../assets/site6.png";
import site7 from "../assets/site7.png";
import site8 from "../assets/site8.png";

import csr2 from "../assets/csr2.jpeg";
import csr1 from "../assets/csr1.png";
import csr3 from "../assets/csr3.jpeg";
import csr4 from "../assets/csr4.jpeg";
import csr5 from "../assets/csr5.jpg";
import csr6 from "../assets/csr6.jpeg";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";



const Csr = () => {
    const benefits = [
        {
            title: "Healthy Food Support",
            image: site1
        },
        {
            title: "Providing books & stationery",
            image: site2
        },
        {
            title: "School Bag",
            image: site3
        },
        {
            title: "Dedicated Teachers",
            image: site4
        },
        {
            title: "Accessible Toilets",
            image: site5
        },
        {
            title: "Health and hygiene facilities",
            image: site6
        },
        {
            title: "General awareness programs",
            image: site7
        },
        {
            title: "Supportive Environment for growth",
            image: site8
        },
    ];

   const gallery = [
    csr2,
    csr1,
    csr3,
    csr4,
    csr5,
    csr6,
];

    const testimonials = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
];

    return (
        <main className="min-h-screen bg-white text-gray-900">

            {/* =====================================================
          HERO SECTION
      ===================================================== */}
            <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px] lg:min-h-[390px]">

                {/* Background Image */}
                <img
        src={student}
        alt="Nanihal CSR"
        className="absolute inset-0 h-full w-full object-cover object-center"
    />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#071d24]/15" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />

                {/* Hero Content */}
                <div className="relative z-10 px-5 text-center">

                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-white/70" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-xs">
                            Corporate Social Responsibility
                        </span>

                        <span className="h-px w-10 bg-white/70" />
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        CSR- "Nanihal"
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                        Building safer, brighter and more meaningful futures for the
                        children of construction workers.
                    </p>

                </div>
            </section>


            {/* =====================================================
          INTRODUCTION
      ===================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

                    {/* Quote */}
                    <div className="mx-auto max-w-4xl text-center">

                        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3479ad]/10 text-[#3479ad]">
                            <HeartHandshake size={25} />
                        </div>

                        <h2 className="text-2xl font-bold leading-tight text-[#071b2b] sm:text-3xl lg:text-4xl">
                            “We don’t just Build Infrastructure,
                            <br className="hidden sm:block" />
                            we build futures”
                        </h2>

                    </div>


                    {/* Description */}
                    <div className="mx-auto mt-8 max-w-6xl">

                        <p className="text-[15px] leading-8 text-gray-600 sm:text-base lg:text-lg">
                            <strong className="font-semibold text-gray-900">
                                “Nanihal”
                            </strong>{" "}
                            is one-of-its-kind initiative in alliance with{" "}
                            <strong className="font-semibold text-gray-900">
                                Yogkshem Alliance Foundation (YAF)
                            </strong>{" "}
                            which aims at providing basic facilities to the young children
                            of the labourers working at construction sites. This initiative
                            not only helps children stay engaged in learning and development,
                            but also gives parents a sense of relief and assurance that their
                            children are safe and cared for. With this peace of mind, workers
                            are able to focus better on their work responsibilities in a more
                            stress-free and productive manner.
                        </p>


                        {/* CTA */}
                        <a
                            href="#"
                            className="group mt-7 inline-flex items-center gap-4 rounded-xl bg-[#3479ad] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3479ad]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#286591] hover:shadow-xl"
                        >
                            Read More About Yogkshem Alliance Foundation

                            <ArrowRight
                                size={19}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                    </div>

                </div>
            </section>


            {/* =====================================================
          AGE GROUP STRIP
      ===================================================== */}
            <section className="bg-[#29594e]">
                <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">

                    <div className="flex items-center gap-3">

                        <div className="h-8 w-1 rounded-full bg-white/70" />

                        <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                            Catering specifically to the age group of 2-8 years.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
          BENEFITS SECTION
      ===================================================== */}
            <section className="bg-[#eef1f5]">
                <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

                    {/* Heading */}
                    <div className="mb-10 text-center sm:mb-12">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3479ad]">
                            What We Provide
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-[#071b2b] sm:text-4xl">
                            Benefits from "Nanihal"
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#3479ad]" />

                    </div>


                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative flex min-h-[250px] flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3479ad]/20 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] sm:min-h-[270px] sm:p-6 lg:p-7"
                                >
                                    {/* Number */}
                                    <span className="absolute right-4 top-3 text-xs font-bold text-gray-200 transition-colors duration-300 group-hover:text-[#3479ad]/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Image */}
                                    <div className="flex h-24 w-full items-center justify-center sm:h-28 lg:h-32">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="max-h-full max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-w-[170px] lg:max-w-[180px]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 flex min-h-[48px] items-center justify-center px-2 text-base font-bold leading-6 text-[#071b2b] sm:text-lg">
                                        {benefit.title}
                                    </h3>

                                    {/* Bottom line */}
                                    <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-[#75b843] transition-all duration-300 group-hover:w-14" />
                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>


            {/* =====================================================
          DESCRIPTION
      ===================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">

                    <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm sm:p-8 lg:p-10">

                        <div className="flex gap-4">

                            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3479ad] text-white sm:flex">
                                <HandHeart size={24} />
                            </div>

                            <p className="text-[15px] leading-8 text-gray-600 sm:text-base">
                                Behind every structure are hardworking hands and dedicated
                                families. At HTPL we not only build infrastructure; we also
                                develop, nurture and support the future. As a part of our
                                commitment to social responsibility, we aim to support the
                                children of construction workers by helping provide access to
                                basic education, learning resources, safe environment and
                                opportunities for a brighter future.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
          SITE PICTURES
      ===================================================== */}
            <section className="bg-white pb-14 sm:pb-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                    {/* Heading */}
                    <div className="mb-7 rounded-2xl bg-gray-100 px-5 py-4">

                        <div className="flex items-center gap-3">

                            <span className="h-8 w-1 rounded-full bg-[#3479ad]" />

                            <h2 className="text-2xl font-bold text-[#071b2b] sm:text-3xl">
                                Some Pictures from Site
                            </h2>

                        </div>

                    </div>


                    {/* Gallery */}
                    <div className="grid grid-cols-1 gap-3 rounded-2xl bg-gray-100 p-3 shadow-lg sm:grid-cols-2 lg:grid-cols-3">
                        {gallery.map((image, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-xl bg-gray-200 ${index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Nanihal site ${index + 1}`}
                                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0
                                            ? "h-64 sm:h-72 lg:h-[500px]"
                                            : "h-56 sm:h-52 lg:h-[242px]"
                                        }`}
                                />

                                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

                                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

            </section>


            {/* =====================================================
          VOICES FROM THE SITE
      ===================================================== */}
            <section className="bg-[#eef1f5]">

                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

                    {/* Heading */}
                    <div className="mb-10 flex items-center gap-4 rounded-2xl border border-gray-300 bg-white px-5 py-4 sm:mb-12 sm:px-7">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3479ad] text-white">
                            <Users size={23} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3479ad] sm:text-xs">
                                Real Stories
                            </p>

                            <h2 className="text-2xl font-bold text-[#071b2b] sm:text-3xl lg:text-4xl">
                                Voices From The Site
                            </h2>
                        </div>

                    </div>


                    {/* Testimonials */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {testimonials.map((item, index) => (
                            <article
                                key={index}
                                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image Frame */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 sm:aspect-[16/11] lg:aspect-[16/10]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}
            <section className="bg-[#071b2b]">

                <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-16">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#7db9df]">
                        <Droplets size={27} />
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                        Building today, nurturing tomorrow.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                        Through Nanihal, we are committed to creating a safe, supportive
                        and enriching environment where every child gets an opportunity
                        to learn, grow and dream bigger.
                    </p>

                </div>

            </section>

        </main>
    );
};

export default Csr;