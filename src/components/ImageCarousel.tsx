"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/img/img1.avif",
    "/img/img2.avif",
    "/img/img3.avif",
    "/img/img4.avif",
    "/img/img5.avif",
    "/img/img6.avif"
];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-xl aspect-video md:aspect-[21/9] bg-gray-900 border border-gray-800">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-full">
                        <Image
                            src={src}
                            alt={`Proyecto ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-bold text-lg">Proyecto Destacado</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-brand-accent" : "bg-white/50 hover:bg-white"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
