import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliticaCookies() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-gray-900 min-h-screen pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-3xl font-bold mb-8 text-brand-accent">Política de Cookies</h1>
                    <div className="space-y-6 text-gray-400">
                        <p>Informamos que este sitio web utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.</p>
                        <p>Próximamente se detallará toda la información legal correspondiente.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
