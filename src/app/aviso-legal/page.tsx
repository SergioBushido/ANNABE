import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-gray-900 min-h-screen pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-3xl font-bold mb-8 text-brand-accent">Aviso Legal</h1>
                    <div className="space-y-6 text-gray-400">
                        <p>En cumplimiento de lo previsto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que este sitio web es propiedad de Alexis Arrocha (Mantenimientos Annabe).</p>
                        {/* Add more placeholder content as needed */}
                        <p>Próximamente se detallará toda la información legal correspondiente.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
