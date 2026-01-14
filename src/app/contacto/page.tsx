"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
        alert('Gracias por su mensaje. Alexis Arrocha se pondrá en contacto pronto.');
    };

    return (
        <main>
            <Navbar />
            <section className="py-24 bg-brand-darker min-h-screen pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Contacte con Nosotros</h2>
                        <div className="w-24 h-1 bg-brand-accent mx-auto mb-4"></div>
                        <p className="text-gray-400">Solicite presupuesto sin compromiso o consúltenos sus dudas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Info de Contacto */}
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-brand-accent text-xl flex-shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg">Ubicación</h4>
                                    <p className="text-gray-400 mt-1">Calle Aridane 1, Finca Tristán calle media local 1</p>
                                    <p className="text-gray-400">Tenerife</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-brand-accent text-xl flex-shrink-0">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg">Email</h4>
                                    <p className="text-gray-400 mt-1">info@mantenimientosannabe.es</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-brand-accent text-xl flex-shrink-0">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg">Teléfono</h4>
                                    <p className="text-gray-400 mt-1 cursor-pointer hover:text-brand-accent transition-colors">+34 637 41 79 90</p>
                                    <p className="text-xs text-brand-accent mt-1">Disponible para urgencias</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-brand-accent text-xl flex-shrink-0">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg">Horario</h4>
                                    <p className="text-gray-400 mt-1">Lunes a Viernes de 8:00 a 17:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input className="w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-brand-accent focus:bg-gray-700 transition-colors" id="nombre" type="text" placeholder="Su nombre" required />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                                    <input className="w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-brand-accent focus:bg-gray-700 transition-colors" id="telefono" type="tel" placeholder="Su teléfono" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="servicio">Tipo de Servicio</label>
                                <select className="w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-brand-accent focus:bg-gray-700 transition-colors" id="servicio">
                                    <option>Fontanería</option>
                                    <option>Electricidad</option>
                                    <option>Gas</option>
                                    <option>Otro / Consulta General</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="mensaje">Mensaje</label>
                                <textarea className="w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-brand-accent focus:bg-gray-700 transition-colors h-32" id="mensaje" placeholder="Describa su problema..." required></textarea>
                            </div>
                            <button type="submit" className={`w-full font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider ${status === 'success' ? 'bg-green-500 text-white' : 'bg-brand-accent hover:bg-brand-accentHover text-brand-darker'}`}>
                                {status === 'success' ? 'Enviado con éxito' : 'Enviar Mensaje'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
