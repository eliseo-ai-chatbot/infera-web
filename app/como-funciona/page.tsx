import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Cómo funciona Eliseo',
  description:
    'Descubrí los 4 pasos con los que Eliseo transforma un mensaje de WhatsApp en un reclamo estructurado, derivado y con seguimiento. Sin apps, sin fricción.',
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+5491100000000';
const WA_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=Hola,%20quiero%20pedir%20una%20demo%20de%20Eliseo`;

const steps = [
  {
    number: '01',
    icon: '📱',
    title: 'El usuario escribe por WhatsApp',
    desc: 'El propietario, inquilino o encargado escribe al número de WhatsApp de la administración, exactamente como lo haría con cualquier contacto. No hay que descargar una app ni registrarse en ningún portal.',
    detail: [
      'Funciona con el número de WhatsApp Business de tu administración',
      'El usuario escribe como lo haría normalmente',
      'Puede enviar texto, fotos o audios del problema',
      'Sin instrucciones especiales para empezar',
    ],
    color: 'indigo',
  },
  {
    number: '02',
    icon: '🤔',
    title: 'Eliseo entiende y pregunta lo necesario',
    desc: 'Eliseo recibe el mensaje y, con lenguaje natural y sin sonar robótico, conduce la conversación para obtener la información clave: dónde está el problema, qué tan urgente es, qué pasó exactamente.',
    detail: [
      'Conversación fluida y natural, no menú de opciones',
      'Adapta las preguntas según el tipo de problema',
      'Solicita fotos cuando el problema lo requiere',
      'Determina la urgencia con criterios predefinidos',
    ],
    color: 'blue',
  },
  {
    number: '03',
    icon: '🔀',
    title: 'Clasifica, prioriza y deriva con contexto',
    desc: 'Con toda la información recopilada, Eliseo categoriza el reclamo, le asigna prioridad y lo deriva al proveedor o equipo correcto, junto con todos los datos necesarios para actuar de inmediato.',
    detail: [
      'Clasificación automática por tipo y urgencia',
      'Derivación al proveedor o área correcta',
      'El receptor recibe toda la información estructurada',
      'Sin necesidad de repreguntarle al consorcista',
    ],
    color: 'violet',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Seguimiento, confirmación y trazabilidad',
    desc: 'Eliseo confirma al usuario que su reclamo fue registrado y derivado. El administrador tiene visibilidad completa del estado de cada caso, sin estar en el medio de cada conversación.',
    detail: [
      'El usuario recibe confirmación inmediata',
      'Panel de trazabilidad para el administrador',
      'Posibilidad de actualizaciones de estado',
      'Registro histórico de todos los reclamos',
    ],
    color: 'green',
  },
];

const faqs = [
  {
    q: '¿Reemplaza al administrador?',
    a: 'No. Eliseo hace el trabajo de recepción, clasificación y derivación. El administrador sigue siendo quien gestiona los proveedores, toma decisiones y resuelve excepciones. Eliseo le libera tiempo para eso.',
  },
  {
    q: '¿Qué pasa si el usuario escribe algo que Eliseo no entiende?',
    a: 'Eliseo está diseñado para manejar mensajes ambiguos con preguntas de clarificación. Si el caso es muy atípico o el usuario insiste, puede escalar automáticamente al administrador.',
  },
  {
    q: '¿Se necesita cambiar el número de WhatsApp de la administración?',
    a: 'No necesariamente. Eliseo se puede conectar al número de WhatsApp Business existente. Evaluamos la opción más conveniente para cada cliente.',
  },
  {
    q: '¿Cuánto tarda en implementarse?',
    a: 'Un piloto básico puede estar funcionando en días. Una implementación completa, con flujos personalizados e integraciones, suele llevar 2 a 4 semanas.',
  },
  {
    q: '¿Funciona en idiomas distintos al español?',
    a: 'Hoy está optimizado para español rioplatense (Argentina) y español latinoamericano. Podemos adaptarlo a otros idiomas según la necesidad.',
  },
  {
    q: '¿Se integra con mi sistema de tickets actual?',
    a: 'Sí. Podemos integrar Eliseo con los sistemas de gestión más comunes. Consultanos sobre tu stack actual y lo evaluamos juntos.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              El proceso
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Cómo funciona Eliseo
            </h1>
            <p className="text-xl text-slate-300">
              Cuatro pasos que convierten el caos de WhatsApp en un flujo de trabajo
              claro, estructurado y trazable.
            </p>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-slate-200">{step.number}</span>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-slate-600 mb-6">{step.desc}</p>
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <ul className="space-y-3">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-xs flex items-center justify-center font-bold flex-shrink-0">
                            ✓
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Dudas comunes sobre Eliseo"
          />
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Listo para verlo en vivo?</h2>
            <p className="text-indigo-200 mb-8">
              La mejor forma de entender cómo funciona Eliseo es interactuar con él. Pedí una demo y te lo mostramos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="secondary" size="lg">
                Pedir demo
              </Button>
              <Button
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 border"
              >
                💬 Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
