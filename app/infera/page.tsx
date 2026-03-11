import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Sobre Infera — Consultora de IA para PyMEs',
  description:
    'Infera es una consultora de IA con sede en Buenos Aires. Diseñamos, construimos y mantenemos soluciones de datos, ML e IA que generan impacto operativo real para PyMEs en Argentina y LatAm.',
};

const services = [
  {
    icon: '🔍',
    title: 'Diagnóstico y estrategia',
    desc: 'Evaluamos el estado actual de tus datos y procesos, identificamos las oportunidades de mayor impacto y diseñamos una hoja de ruta realista y priorizada.',
    items: [
      'Auditoría de datos y procesos',
      'Identificación de casos de uso de IA',
      'Hoja de ruta priorizada por ROI',
      'Evaluación de infraestructura existente',
    ],
  },
  {
    icon: '⚙️',
    title: 'Implementación',
    desc: 'Del prototipo al sistema en producción. Construimos soluciones de datos y ML que funcionan en el mundo real, no solo en un notebook.',
    items: [
      'Pipelines de datos y ETL',
      'Modelos de ML supervisados y no supervisados',
      'Agentes conversacionales (como Eliseo)',
      'Integraciones con sistemas existentes',
    ],
  },
  {
    icon: '📈',
    title: 'Mejora continua',
    desc: 'Los mejores resultados vienen de la iteración. Monitoreamos, medimos y mejoramos las soluciones con datos reales de operación.',
    items: [
      'Monitoreo de modelos en producción',
      'Reentrenamiento y ajuste',
      'Análisis de performance y mejoras',
      'Soporte técnico continuo',
    ],
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Impacto sobre tecnología',
    desc: 'No hacemos IA por hacer IA. Cada proyecto arranca con una pregunta: ¿qué problema operativo resuelve esto?',
  },
  {
    icon: '⚡',
    title: 'Pragmatismo sobre perfección',
    desc: 'Un sistema funcionando en producción en 3 semanas supera a una arquitectura perfecta que tarda 6 meses.',
  },
  {
    icon: '🤝',
    title: 'Transferencia de conocimiento',
    desc: 'Construimos capacidad interna en el cliente. No creamos dependencia; creamos autonomía.',
  },
  {
    icon: '🔬',
    title: 'Rigor técnico',
    desc: 'PyME no significa solución de segunda categoría. Aplicamos las mismas prácticas que en grandes empresas.',
  },
];

export default function InferaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Sobre Infera
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              IA aplicada para PyMEs: de los datos al impacto operativo
            </h1>
            <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
              Somos una consultora de inteligencia artificial con sede en Buenos Aires.
              Diseñamos, construimos y mantenemos soluciones de datos y ML que generan
              resultados reales para empresas medianas.
            </p>
            <Button href="/contacto" variant="secondary" size="lg">
              Hablar con el equipo
            </Button>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Consultoría de IA de punta a punta"
            subtitle="Acompañamos el ciclo completo: desde entender el problema hasta tener una solución funcionando en producción."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-indigo-200 transition-all"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-indigo-400 mt-0.5 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-indigo-50">
        <Container>
          <SectionHeading
            eyebrow="Nuestra forma de trabajar"
            title="Principios que guían cada proyecto"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-indigo-100">
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <h3 className="font-bold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why PyMEs */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Por qué PyMEs"
              title="La IA no es solo para grandes empresas"
              centered={false}
            />
            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                La mayoría de las soluciones de IA están diseñadas para empresas con equipos de
                datos de decenas de personas y presupuestos de millones de dólares. Las PyMEs
                quedan afuera, aunque tengan los mismos (o peores) problemas operativos.
              </p>
              <p>
                En Infera creemos que el tamaño de la empresa no debería determinar el acceso
                a la tecnología. Diseñamos soluciones escaladas al tamaño real del cliente:
                con el rigor técnico de una gran empresa, pero con la velocidad y el pragmatismo
                que una PyME necesita.
              </p>
              <p>
                Argentina y LatAm tienen miles de empresas medianas con problemas operativos
                costosos y procesos manuales que la IA puede resolver. Ese es nuestro foco.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Eliseo showcase */}
      <section className="py-20 bg-slate-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Nuestro producto
            </p>
            <h2 className="text-3xl font-bold mb-4">Eliseo: IA aplicada al mantenimiento</h2>
            <p className="text-slate-400 mb-8">
              Eliseo es la materialización de nuestra filosofía: un problema real, un canal existente
              (WhatsApp), y una solución que funciona desde el día uno. Comenzó en consorcios y hoy
              se expande a hoteles, plantas y edificios corporativos.
            </p>
            <Button href="/eliseo" variant="secondary" size="lg">
              Conocer Eliseo →
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Tenés un problema de datos o IA en tu empresa?</h2>
            <p className="text-indigo-200 mb-8">
              Contanos el desafío y evaluamos juntos cómo la IA puede ayudarte.
              Primera conversación sin costo.
            </p>
            <Button href="/contacto" variant="secondary" size="lg">
              Hablar con Infera
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
