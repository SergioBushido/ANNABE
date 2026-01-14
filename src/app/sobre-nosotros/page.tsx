import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-gray-900 min-h-screen pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <img src="/img/Alexis.jpg" alt="Trabajador Profesional" className="rounded-lg shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500 border border-gray-700" />
                                <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-darker p-6 rounded shadow-lg hidden md:block">
                                    <p className="font-bold text-2xl">100%</p>
                                    <p className="text-sm font-semibold uppercase">Clientes Satisfechos</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-2">Sobre Nosotros</h4>
                            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">Alexis Arrocha: Compromiso y Profesionalidad</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                En <strong>Mantenimientos Annabe</strong>, entendemos que los problemas de fontanería, electricidad o gas no pueden esperar. Nos dedicamos a ofrecer soluciones rápidas, seguras y duraderas.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Con años de experiencia en el sector, garantizamos un trato cercano y un trabajo bien hecho desde el primer momento. Utilizamos materiales de primera calidad y respetamos las normativas de seguridad vigentes.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                                    <i className="fas fa-clock text-brand-accent text-xl mb-2"></i>
                                    <h5 className="text-white font-bold">Puntualidad</h5>
                                </div>
                                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                                    <i className="fas fa-shield-alt text-brand-accent text-xl mb-2"></i>
                                    <h5 className="text-white font-bold">Garantía</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
