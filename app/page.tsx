import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Eliseo es el asistente por WhatsApp que ordena y deriva reclamos de mantenimiento para administraciones de consorcios, hoteles y plantas industriales. Menos "call center". Más gestión real.',
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+5491100000000';
const WA_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=Hola,%20quiero%20pedir%20una%20demo%20de%20Eliseo`;

const painPoints = [
  {
    icon: '📱',
    title: 'WhatsApp desbordado',
    desc: 'Decenas de mensajes de reclamos por día sin un sistema de seguimiento. Todo queda en el chat.',
  },
  {
    icon: '📞',
    title: 'Llamadas que no terminan',
    desc: 'El administrador actúa como call center: recibe, repregunta, reenvía. Sin escalar, sin registro.',
  },
  {
    icon: '😤',
    title: '"La administración no responde"',
    desc: 'Propietarios y consorcistas sienten que sus reclamos caen en un pozo negro sin respuesta.',
  },
  {
    icon: '🔧',
    title: 'Proveedores sin contexto',
    desc: 'El proveedor llega sin saber el detalle del problema. Pierde tiempo, el administrador también.',
  },
];

const steps = [
  {
    number: '01',
    title: 'El usuario escribe por WhatsApp',
    desc: 'El propietario o encargado envía su reclamo al número de la administración. Sin descargar apps.',
  },
  {
    number: '02',
    title: 'Eliseo entiende y pregunta lo necesario',
    desc: 'Con lenguaje natural y fluido, Eliseo recopila los datos clave: ubicación, urgencia, descripción.',
  },
  {
    number: '03',
    title: 'Clasifica y deriva con contexto',
    desc: 'El reclamo llega al proveedor o equipo correcto con toda la información necesaria. Sin ida y vuelta.',
  },
  {
    number: '04',
    title: 'Seguimiento y trazabilidad',
    desc: 'El usuario recibe confirmación. El administrador tiene visibilidad de todo sin estar en el medio.',
  },
];

const adminBenefits = [
  'Elimina el "call center" por WhatsApp',
  'Información estructurada desde el primer contacto',
  'Derivación automática al proveedor correcto',
  'Historial y trazabilidad de todos los reclamos',
  'Disponible 24/7 sin costo adicional de staff',
];

const residentBenefits = [
  'Respuesta inmediata a cualquier hora',
  'Sin esperar que el administrador esté disponible',
  'Confirmación de que el reclamo fue recibido',
  'Actualizaciones del estado del reclamo',
  'Experiencia simple: solo WhatsApp',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Producto de Infera
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Eliseo: el asistente por{' '}
              <span className="text-green-400">WhatsApp</span> que ordena los
              reclamos de mantenimiento
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-200 mb-10 max-w-2xl mx-auto">
              Menos “call center” por WhatsApp. Más gestión real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Pedir demo
              </Button>
              <Button
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600"
              >
                💬 Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="El problema"
            title="¿Reconocés esta situación?"
            subtitle="Administrar reclamos de mantenimiento por WhatsApp es caótico. Sin estructura, sin seguimiento, sin escala."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-slate-800 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What is Eliseo */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                La solución
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                ¿Qué es Eliseo?
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Eliseo es un asistente conversacional que vive en WhatsApp — sin app, sin portal, sin fricción.
                Atiende los reclamos de mantenimiento con un estilo de conversación humano y fluido.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Recibe el mensaje, hace las preguntas correctas, estructura el reclamo y lo deriva al
                equipo o proveedor adecuado con todo el contexto necesario.
              </p>
              <Button href="/eliseo" variant="outline">
                Conocer Eliseo en detalle →
              </Button>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200">
              <div className="space-y-4">
                {[
                  { from: 'them', msg: 'Hola, tengo una pérdida de agua en el baño del depto 4B' },
                  { from: 'eliseo', msg: '¡Hola! Soy Eliseo, el asistente de la administración. Para registrar tu reclamo, ¿podés decirme si el agua está cayendo del techo o viene de una cañería visible?' },
                  { from: 'them', msg: 'Del techo, parece que viene del piso de arriba' },
                  { from: 'eliseo', msg: 'Entendido. ¿El agua está goteando constantemente o fue un episodio puntual? Así lo clasificamos con la urgencia correcta.' },
                ].map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.from === 'eliseo' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.from === 'eliseo'
                          ? 'bg-white text-slate-700 shadow-sm border border-slate-100'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {m.msg}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-center text-indigo-400">Conversación de ejemplo con Eliseo</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 bg-indigo-950 text-white">
        <Container>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Simple para el usuario. Poderoso para la administración."
            subtitle="4 pasos que transforman el caos de WhatsApp en un flujo de trabajo estructurado."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-black text-indigo-800 mb-3">{step.number}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-indigo-300">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/como-funciona" variant="secondary" size="md">
              Ver en detalle cómo funciona →
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Beneficios"
            title="Gana la administración. Ganan los consorcistas."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-5">
                🏢 Para la administradora
              </h3>
              <ul className="space-y-3">
                {adminBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-green-900 mb-5">
                🏠 Para propietarios y consorcistas
              </h3>
              <ul className="space-y-3">
                {residentBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries teaser */}
      <section className="py-20 bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Industrias"
            title="Pensado para quienes gestionan edificios y espacios"
            subtitle="Eliseo comenzó en consorcios y hoy acompaña hoteles, plantas industriales y edificios corporativos."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['🏢 Consorcios (HOA)', '🏨 Hoteles y hotelería', '🏭 Plantas industriales', '🏗️ Edificios corporativos'].map((ind) => (
              <span
                key={ind}
                className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {ind}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/industrias" variant="outline">
              Ver casos por industria →
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Querés ver Eliseo en acción?
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              Hacemos un piloto con tu administración. Sin compromiso. Sin complejidad de integración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="secondary" size="lg">
                Quiero un piloto
              </Button>
              <Button
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 border"
              >
                💬 WhatsApp directo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Infera teaser */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Detrás de Eliseo
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Infera</h2>
            <p className="text-slate-600 mb-6">
              Somos una consultora de IA para PyMEs con sede en Buenos Aires. Diseñamos, construimos
              y mantenemos soluciones de datos, ML e IA que generan impacto operativo real.
            </p>
            <Button href="/infera" variant="ghost">
              Conocer Infera →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
