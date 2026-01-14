import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidad() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-gray-900 min-h-screen pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-3xl font-bold mb-8 text-brand-accent">Política de Privacidad</h1>
                    <div className="space-y-6 text-gray-400">
                        <p>La presente Política de Privacidad tiene por objeto informar sobre el modo en que se tratan los datos de carácter personal que se facilitan a través de este sitio web.</p>
                        <p>Mantenimientos Annabe garantiza la confidencialidad de los datos personales facilitados por los usuarios y su tratamiento de acuerdo con la legislación vigente en materia de protección de datos de carácter personal.</p>
                        <p>Próximamente se detallará toda la información legal correspondiente.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
