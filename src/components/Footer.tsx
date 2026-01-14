import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">
                            MANTENIMIENTOS ANNABE
                        </h3>
                        <p className="text-sm">
                            Profesionales a su servicio. Especialistas en fontanería, electricidad y gas gestionados por Alexis Arrocha.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-brand-accent">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="hover:text-brand-accent">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-nosotros" className="hover:text-brand-accent">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="hover:text-brand-accent">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-accent text-xl">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent text-xl">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent text-xl">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-900 pt-8 text-center text-xs">
                    <p>
                        &copy; <span id="year">{currentYear}</span> Mantenimientos Annabe. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
