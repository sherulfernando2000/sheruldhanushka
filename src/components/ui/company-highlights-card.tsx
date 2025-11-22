"use client";

import Image from "next/image";

export default function CompanyHighlightsCard() {
    const logos = [
        "/images/company-logo/postcss.config.svg",
        "/images/company-logo/postcss.config.svg",
        "/images/company-logo/postcss.config.svg",
        "/images/company-logo/postcss.config.svg",
        "/images/company-logo/postcss.config.svg",
        "/images/company-logo/postcss.config.svg",
    ];

    return (
        <section className="bg-secondary text-white py-20 px-6 sm:px-16 lg:pl-36 xl:pl-72 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div className="space-y-6">
                    <p className="text-sm font-semibold tracking-wide text-gray-300 uppercase">
                        Company highlights
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light leading-snug">
                        We build lasting partnerships
                        <br /> with our clients
                    </h2>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-2 gap-10 border-t border-white pt-10">
                    <div>
                        <h3 className="text-4xl font-light mb-2">100+</h3>
                        <p className="text-gray-400 text-sm">projects delivered</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-light mb-2">10</h3>
                        <p className="text-gray-400 text-sm">
                            active clients, including Fortune 500 companies
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-light mb-2">2+</h3>
                        <p className="text-gray-400 text-sm">years on the market</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-light mb-2">20+</h3>
                        <p className="text-gray-400 text-sm">
                            offices and delivery centres globally
                        </p>
                    </div>
                </div>
            </div>

            {/* Auto-scrolling Logos Section */}
            <div className="relative mt-16 overflow-hidden">
                <div className="flex whitespace-nowrap opacity-70 animate-marquee">
                    {[...logos, ...logos].map((src, i) => (
                        <div key={i} className="flex-shrink-0 mx-8">
                            <Image
                                src={src}
                                alt="Company Logo"
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Effects */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}
