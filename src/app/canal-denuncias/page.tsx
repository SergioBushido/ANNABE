import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CanalDenuncias() {
    return (
        <main>
            <Navbar />
            <section className="py-20 bg-gray-900 min-h-screen pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-3xl font-bold mb-8 text-brand-accent">Canal de Denuncias</h1>
                    <div className="space-y-6 text-gray-400">
                        <p>Mantenimientos Annabe pone a disposición de sus empleados y colaboradores un canal de denuncias para comunicar cualquier irregularidad o comportamiento contrario a la ley o a las normas de conducta de la empresa.</p>
                        <p>Próximamente se detallará toda la información legal correspondiente.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
