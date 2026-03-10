import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Eliseo — Asistente de mantenimiento por WhatsApp',
  description:
    'Eliseo atiende, clasifica y deriva reclamos de mantenimiento por WhatsApp con conversación natural y fluida. Disponible 24/7. Sin app, sin portal, sin fricción.',
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+5491100000000';
const WA_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=Hola,%20quiero%20pedir%20una%20demo%20de%20Eliseo`;

const features = [
  {
    icon: '🟢',
    title: 'Disponible 24/7',
    desc: 'Eliseo atiende a cualquier hora. El reclamo se registra aunque el administrador esté durmiendo.',
  },
  {
    icon: '💬',
    title: 'Solo WhatsApp',
    desc: 'Sin apps, sin portales, sin contraseñas. El canal que todos ya usan.',
  },
  {
    icon: '🧠',
    title: 'Entiende el contexto',
    desc: 'Hace las preguntas necesarias para recopilar toda la información antes de derivar.',
  },
  {
    icon: '📋',
    title: 'Clasifica y prioriza',
    desc: 'Distingue urgencias de reclamos rutinarios. Cada caso llega con la prioridad correcta.',
  },
  {
    icon: '🔀',
    title: 'Deriva con contexto',
    desc: 'El proveedor o equipo recibe el reclamo con todos los datos. Sin preguntar dos veces.',
  },
  {
    icon: '🔔',
    title: 'Confirma y notifica',
    desc: 'El usuario recibe confirmación. No queda con la duda de si su mensaje llegó.',
  },
  {
    icon: '📈',
    title: 'Escala sin esfuerzo',
    desc: 'Cien reclamos simultáneos o uno. Eliseo los maneja igual sin sumar carga al equipo.',
  },
  {
    icon: '🤝',
    title: 'Escala a humano',
    desc: 'Cuando el caso lo requiere, Eliseo sabe cuándo involucrar al administrador.',
  },
];

const differentiators = [
  {
    title: 'Conversación humana, no formulario',
    desc: 'Eliseo no es un bot de opciones numeradas. Conversa de forma natural, en español rioplatense, adaptándose al tono del usuario.',
  },
  {
    title: 'Diseñado para el negocio, no para la tecnología',
    desc: 'No es un chatbot genérico. Está entrenado y configurado para el workflow específico de gestión de mantenimiento.',
  },
  {
    title: 'Cero fricción de adopción',
    desc: 'Los usuarios no aprenden nada nuevo. WhatsApp ya está instalado. El número lo configura la administración.',
  },
  {
    title: 'Integrable con tu operación actual',
    desc: 'Puede derivar por WhatsApp, email, o integrarse con tu sistema de tickets existente.',
  },
];

const consorcioCases = [
  'Pérdidas de agua e inundaciones',
  'Problemas eléctricos en áreas comunes',
  'Daños en ascensores',
  'Reclamos de ruidos molestos',
  'Mantenimiento de portería y accesos',
  'Problemas de calefacción central',
  'Limpieza y sanitización',
  'Reparaciones de fachada y estructura',
];

export default function EliseoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Eliseo
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              El asistente de mantenimiento que vive en{' '}
              <span className="text-green-400">WhatsApp</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Recibe reclamos, hace las preguntas correctas, clasifica, deriva y confirma.
              Disponible 24/7. Sin apps adicionales. Con conversación de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Pedir demo
              </Button>
              <Button href="/como-funciona" variant="secondary" size="lg">
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Todo lo que Eliseo hace por vos"
            subtitle="Desde el primer mensaje hasta la confirmación de resolución, Eliseo gestiona el ciclo completo."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-indigo-50">
        <Container>
          <SectionHeading
            eyebrow="Diferencial"
            title='Por qué Eliseo no es "otro chatbot"'
            subtitle="La diferencia está en la experiencia de conversación y en el foco en el negocio."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                  {d.title}
                </h3>
                <p className="text-sm text-slate-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Consorcio use cases */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                Caso de uso principal
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Consorcios y administraciones
              </h2>
              <p className="text-slate-600 mb-6">
                Eliseo nació para resolver el problema más común de cualquier administradora de consorcios:
                el desbordamiento de reclamos sin estructura, sin seguimiento y sin trazabilidad.
              </p>
              <p className="text-slate-600 mb-8">
                Hoy maneja los tipos de reclamos más frecuentes con total autonomía, escalando
                solo cuando es necesario.
              </p>
              <Button href="/industrias" variant="outline">
                Ver todos los casos de uso →
              </Button>
            </div>
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wide">
                  Tipos de reclamos que maneja Eliseo
                </h3>
                <ul className="space-y-2">
                  {consorcioCases.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration */}
      <section className="py-20 bg-slate-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Integración y operación"
              title="Fácil de implementar, sin reemplazar lo que ya usás"
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  step: '1',
                  title: 'Configuración inicial',
                  desc: 'Definimos los flujos, los tipos de reclamo y los criterios de derivación junto a tu equipo.',
                },
                {
                  step: '2',
                  title: 'Número de WhatsApp',
                  desc: 'Eliseo se conecta al número de WhatsApp Business de tu administración.',
                },
                {
                  step: '3',
                  title: 'Piloto y mejora continua',
                  desc: 'Arrancamos con un piloto, medimos, ajustamos y mejoramos con datos reales.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-black text-indigo-500 mb-3">{item.step}</div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Listo para probar Eliseo?</h2>
            <p className="text-indigo-200 mb-8">
              Contactanos y armamos un piloto para tu administración en días, no meses.
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
    </>
  );
}
