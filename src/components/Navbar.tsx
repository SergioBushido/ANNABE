"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass = scrolled
        ? "bg-brand-darker shadow-md"
        : "bg-brand-darker/95 backdrop-blur";

    const linkClass = (path: string) =>
        `font-medium transition-colors ${pathname === path
            ? "text-brand-accent"
            : "text-gray-300 hover:text-brand-accent"
        }`;

    const mobileLinkClass = (path: string) =>
        `block px-3 py-2 rounded-md ${pathname === path
            ? "text-brand-accent bg-gray-800"
            : "text-gray-300 hover:text-brand-accent hover:bg-gray-800"
        }`;

    return (
        <nav
            className={`fixed w-full z-50 border-b border-gray-800 transition-all duration-300 ${navClass}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <svg
                                className="w-full h-full text-brand-accent drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    transform="translate(0 -5)"
                                />
                                <g transform="translate(0, 0)">
                                    <path
                                        d="M50 15 L40 45 H52 L44 75 L64 35 H52 L58 15 Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M32 55 C32 68 42 68 42 55 C42 45 32 35 32 35 C32 35 22 45 22 55 C22 68 32 68 32 55 Z"
                                        fill="currentColor"
                                        opacity="0.8"
                                    />
                                    <path
                                        d="M68 68 C78 68 82 55 75 45 C72 50 72 55 68 55 C64 55 64 50 68 45 C60 35 54 50 54 58 C54 68 62 68 68 68 Z"
                                        fill="currentColor"
                                        opacity="0.8"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-xl tracking-wider text-white">
                                MANTENIMIENTOS <span className="text-brand-accent">ANNABE</span>
                            </span>
                            <span className="text-xs text-brand-gray tracking-widest uppercase">
                                Alexis Arrocha
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className={linkClass("/")}>
                            Inicio
                        </Link>
                        <Link href="/servicios" className={linkClass("/servicios")}>
                            Servicios
                        </Link>
                        <Link href="/sobre-nosotros" className={linkClass("/sobre-nosotros")}>
                            Nosotros
                        </Link>
                        <Link
                            href="/contacto"
                            className="bg-brand-accent hover:bg-brand-accentHover text-brand-darker px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
                        >
                            Contactar
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-brand-dark border-t border-gray-800 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass("/")}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/servicios"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass("/servicios")}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/sobre-nosotros"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass("/sobre-nosotros")}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contacto"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-brand-accent font-bold"
                        >
                            Contactar Ahora
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
