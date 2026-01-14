import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-brand-darker min-h-screen pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Nuestros Servicios</h2>
                        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            Realizamos instalaciones eléctricas tanto en viviendas como en locales comerciales. Trabajamos con materiales de alta calidad y nos aseguramos de cumplir con todas las normativas vigentes en cuanto a seguridad y eficiencia energética.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Fontanería */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <i className="fas fa-faucet text-blue-400"></i> Fontanería Profesional
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Instalaciones y reparaciones de fontanería para hogares y negocios en Tenerife, garantizando calidad y eficiencia.
                                </p>
                                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Revisión y certificación de instalaciones de agua.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Cálculos y memorias técnicas.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalaciones nuevas, mantenimientos y reparaciones.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Localización de fugas.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                    {/* Placeholder for Fontanería Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                        <i className="fas fa-faucet text-6xl opacity-20"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Electricidad */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                    {/* Placeholder for Electricidad Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                        <i className="fas fa-bolt text-6xl opacity-20"></i>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 text-center text-gray-500 text-xs">
                                        An array of electrical meters mounted on a wall with visible pipes and wires...
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <i className="fas fa-bolt text-brand-accent"></i> Instalación Eléctrica
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Realizamos instalaciones eléctricas tanto en viviendas como en locales comerciales.
                                </p>
                                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 h-full">
                                    <ul className="grid grid-cols-1 gap-3 text-gray-300">
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Revisión y certificación de instalaciones eléctricas.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Cálculos y memorias técnicas de diseño.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalaciones nuevas, mantenimientos y reparaciones.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalaciones de punto de recargas de vehículos.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Localización y reparación de averías.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Comparativas de facturas, altas y cambios de titularidad.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Gas */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <i className="fas fa-fire text-red-500"></i> Gas Seguro
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Servicios de instalación y mantenimiento de sistemas de gas, asegurando seguridad y cumplimiento normativo.
                                </p>
                                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalación de calderas.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Revisiones periódicas.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Reparación de fugas.</li>
                                        <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Calefacción central.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                    {/* Placeholder for Gas Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                        <i className="fas fa-fire text-6xl opacity-20"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-xl text-gray-300 mb-8">
                            Además, ofrecemos asesoramiento personalizado para adecuar la instalación a las necesidades específicas de cada cliente.
                        </p>
                        <a href="/contacto" className="bg-brand-accent hover:bg-brand-accentHover text-brand-darker font-bold py-4 px-8 rounded text-lg transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                            Solicitar Presupuesto
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
