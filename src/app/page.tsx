import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center hero-bg">
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 bg-brand-darker/80 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-2 px-4 border border-brand-accent/50 rounded-full bg-brand-accent/10 mb-6 backdrop-blur-sm animate-fade-in-up">
            <span className="text-brand-accent font-semibold tracking-wide uppercase text-sm">Servicio Profesional Garantizado</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 leading-tight">
            Empresa instaladora habilitada en <span className="text-brand-accent">Canarias</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Ofrecemos servicios de <strong>electricidad</strong>, <strong>fontanería</strong> y <strong>gas</strong> en Tenerife.
            Nuestro objetivo es proporcionar soluciones integrales y de calidad en cada proyecto que emprendemos.
            Contamos con una experiencia de más de 15 años.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-brand-accent hover:bg-brand-accentHover text-brand-darker font-bold py-4 px-8 rounded text-lg transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              Solicitar Presupuesto
            </Link>
            <Link href="/servicios" className="border border-gray-600 hover:border-brand-accent text-white hover:text-brand-accent font-semibold py-4 px-8 rounded text-lg transition-all bg-brand-darker/50 backdrop-blur-sm">
              Nuestros Servicios
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Por qué destacamos */}
      <section className="py-20 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Por qué destacamos</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-colors">
              <div className="text-brand-accent text-4xl mb-4"><i className="fas fa-user-tie"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Servicios profesionales</h3>
              <p className="text-gray-400">Contamos con un equipo de expertos en instalaciones eléctricas, fontanería y gas, garantizando un servicio de calidad y seguridad para tu hogar o negocio.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-colors">
              <div className="text-brand-accent text-4xl mb-4"><i className="fas fa-certificate"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Experiencia y confiabilidad</h3>
              <p className="text-gray-400">Con más de 15 años de experiencia en el sector, Mantenimientos Annabe es una empresa de confianza que ofrece soluciones eficientes y duraderas.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-colors">
              <div className="text-brand-accent text-4xl mb-4"><i className="fas fa-hand-holding-heart"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Atención personalizada</h3>
              <p className="text-gray-400">Nos preocupamos por satisfacer las necesidades individuales de cada cliente, brindando un trato personalizado y asesoramiento especializado en cada proyecto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Mantenimiento */}
      <section id="servicios" className="py-24 bg-brand-darker relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Servicios de Mantenimiento</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrecemos mantenimiento e instalaciones de fontanería, gas y electricidad en Tenerife con calidad garantizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fontanería */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-xl flex items-center justify-center text-2xl">
                  <i className="fas fa-faucet"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Fontanería</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Revisión y certificación de instalaciones de agua.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Cálculos y memorias técnicas.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalaciones nuevas, mantenimientos y reparaciones.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Localización de fugas (gas traza, geófono, termografía).</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Sustitución y ajustes de griferías y mecanismos.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Desatascos y limpieza de desagües.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Montaje y reparación de calentadores eléctricos.</li>
              </ul>
            </div>

            {/* Electricidad */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-900/20 text-brand-accent rounded-xl flex items-center justify-center text-2xl">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Instalación Eléctrica</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Revisión y certificación de instalaciones eléctricas.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Cálculos y memorias técnicas de diseño.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Instalaciones de punto de recargas de vehículos.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Localización y reparación de averías.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Monitorización de instalaciones.</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> Comparativas de facturas, altas y cambios de titularidad.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 max-w-3xl mx-auto italic border-l-4 border-brand-accent pl-6 py-2 bg-gray-800/50 rounded-r">
              "Además, ofrecemos asesoramiento personalizado para adecuar la instalación a las necesidades específicas de cada cliente, y nos aseguramos de cumplir con todas las normativas vigentes."
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Galería de Proyectos</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholders for gallery */}
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:bg-gray-800/80 transition-all">
                <i className="fas fa-images text-4xl"></i>
              </div>
              {/* <img src="..." alt="Proyecto 1" className="w-full h-full object-cover" /> */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">Instalación Comercial</span>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:bg-gray-800/80 transition-all">
                <i className="fas fa-images text-4xl"></i>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">Reforma Integral</span>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:bg-gray-800/80 transition-all">
                <i className="fas fa-images text-4xl"></i>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">Mantenimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Urgencia */}
      <section className="bg-brand-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-darker mb-2">¿Necesita una reparación urgente?</h2>
            <p className="text-brand-darker/80 font-medium">Estamos disponibles para atender sus averías de electricidad, gas o agua.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="tel:+34637417990" className="inline-flex items-center bg-brand-darker text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-darker transition-colors border border-brand-darker">
              <i className="fas fa-phone-alt mr-3"></i> Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
