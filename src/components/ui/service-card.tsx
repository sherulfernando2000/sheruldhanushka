"use client";

import { Circle, ArrowRight } from "lucide-react";
import Link from "next/link";

type Service = {
    id: number;
    category: string;
    title: string;
    description: string;
    href: string;
    imageURL: string;
};

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Link href={service.href}>
            <div
                className="relative border border-gray-200 rounded-sm w-[360px] h-[490px] px-4 py-5 flex flex-col justify-between
                           group hover:shadow-lg hover:bg-primary group-hover:text-white transition-colors duration-700 ease-in-out"
            >
                <div className="h-full flex flex-col justify-between">

                    <div>
                        <div className="flex items-center gap-2 text-base font-light text-black group-hover:text-white transition-colors duration-700 ease-in-out">
                            <Circle size={12} strokeWidth={2} className="transition-transform duration-1000 ease-in-out group-hover:rotate-[15deg]" />
                            <span>{service.category}</span>
                        </div>
                        <div className="mt-50 text-black group-hover:text-white transition-colors duration-700 ease-in-out">
                            <h3 className="text-2xl font-light mb-3 leading-snug">
                                {service.title}
                            </h3>
                            <p className="font-light text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>

                    <div
                        className="relative mt-auto mb-2 rounded-full overflow-hidden h-[60px] w-full border border-gray-300 group-hover:border-white transition-colors duration-700 ease-in-out"
                    >

                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 rounded-full
                                       group-hover:opacity-50 transition-opacity duration-1000 ease-in-out"
                            style={{ backgroundImage: `url(${service.imageURL})` }}
                        ></div>

                        <div
                            className="relative z-10 rounded-full flex items-center h-full pl-2 pr-2 bg-transparent"
                        >
                            <div
                                className="pl-4 text-transparent select-none font-medium
                                           group-hover:text-white transition-colors duration-700 ease-in-out"
                            >
                                View Service
                            </div>

                            <div className="absolute top-1/2 -translate-y-1/2 h-[50px] w-[50px] border border-gray-300
                            rounded-full p-3 flex items-center justify-center right-1 transition-all duration-1000 ease-in-out group-hover:bg-white/10 group-hover:rotate-[10deg]">
                                <ArrowRight className="text-gray-500 group-hover:text-white transition-colors duration-700 ease-in-out" size={18} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
