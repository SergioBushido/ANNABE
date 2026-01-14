import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-200 py-12 border-t border-gray-900">
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
                                <Link href="/" className="hover:text-brand-accent transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="hover:text-brand-accent transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-nosotros" className="hover:text-brand-accent transition-colors">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="hover:text-brand-accent transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://www.facebook.com/ALEXISARROCHA/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-xl" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/mantenimientos.annabe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-xl" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mantenimientos-annabe-alexis-arrocha-669696293/?originalSubdomain=es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-xl" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                        <a
                            href="https://wa.me/34637417990"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full transition-colors"
                            aria-label="Contactar por WhatsApp"
                        >
                            <i className="fab fa-whatsapp text-xl"></i> WhatsApp
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-900 pt-8 text-center text-xs">
                    <div className="space-y-2">
                        <p>
                            &copy; <span id="year">{currentYear}</span> Mantenimientos Annabe. Todos los derechos reservados.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2 text-gray-200">
                            <Link href="/aviso-legal" className="hover:text-brand-accent transition-colors">Aviso legal</Link>
                            <span>·</span>
                            <Link href="/politica-privacidad" className="hover:text-brand-accent transition-colors">Política de privacidad</Link>
                            <span>·</span>
                            <Link href="/politica-cookies" className="hover:text-brand-accent transition-colors">Política de Cookies</Link>
                            <span>·</span>
                            <Link href="/canal-denuncias" className="hover:text-brand-accent transition-colors">Canal de denuncias</Link>
                        </p>
                        <p className="pt-2 text-[10px] text-gray-400">
                            Diseñado y desarrollo por <a href="https://e-asy.es" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">E-ASY | Consultoría IT & Agencia Digital</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
