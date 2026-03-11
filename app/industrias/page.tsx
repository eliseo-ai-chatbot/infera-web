import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Industrias y casos de uso',
  description:
    'Eliseo se adapta a consorcios, hoteles, plantas industriales y edificios corporativos. Descubrí cómo resuelve los reclamos de mantenimiento en cada sector.',
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+5491100000000';
const WA_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=Hola,%20quiero%20pedir%20una%20demo%20de%20Eliseo`;

const industries = [
  {
    id: 'consorcios',
    icon: '🏢',
    tag: 'Caso principal',
    title: 'Consorcios y administraciones',
    subtitle: 'El origen de Eliseo',
    desc: 'Las administraciones de consorcios son el ambiente donde Eliseo nació. El problema es siempre el mismo: el administrador actúa como intermediario de todos los reclamos, saturando su WhatsApp y perdiendo información crítica en el camino.',
    uses: [
      'Pérdidas de agua e inundaciones',
      'Fallas en ascensores',
      'Problemas eléctricos en áreas comunes',
      'Reclamos de ruidos molestos',
      'Mantenimiento de portería, accesos e intercomunicadores',
      'Limpieza y sanitización de áreas comunes',
      'Daños en estructura y fachada',
      'Calefacción y termotanques centrales',
      'Problemas de iluminación',
      'Reclamos entre vecinos',
    ],
    impact: [
      'El administrador deja de ser el "call center"',
      'Cada reclamo queda registrado con datos completos',
      'Los propietarios sienten que son atendidos',
      'Los proveedores llegan con el contexto correcto',
    ],
  },
  {
    id: 'hoteles',
    icon: '🏨',
    tag: 'Hotelería',
    title: 'Hoteles y hotelería',
    subtitle: 'Experiencia del huésped sin fricción',
    desc: 'En hotelería, la velocidad de respuesta es parte de la experiencia. Eliseo permite que el huésped reporte un problema sin llamar a recepción y que el equipo de mantenimiento actúe de inmediato con toda la información.',
    uses: [
      'Reporte de fallas en habitaciones (aire, calefacción, TV)',
      'Problemas de plomería o inundaciones',
      'Solicitudes de mantenimiento preventivo',
      'Reclamos de limpieza',
      'Fallas en equipamiento de habitaciones',
      'Problemas en áreas comunes (pileta, gym, SPA)',
      'Solicitudes de infraestructura para eventos',
    ],
    impact: [
      'El huésped no espera en línea en recepción',
      'El equipo de mantenimiento recibe el parte inmediatamente',
      'Registro de cada incidente para mejorar el servicio',
      'Reducción de tiempo de respuesta medible',
    ],
  },
  {
    id: 'fabricas',
    icon: '🏭',
    tag: 'Industria',
    title: 'Plantas y fábricas',
    subtitle: 'Mantenimiento industrial sin papeleo',
    desc: 'En entornos industriales, un reclamo de mantenimiento no resuelto puede detener la producción. Eliseo estructura el reporte desde el operario hasta el equipo de mantenimiento, sin depender de planillas ni llamados telefónicos.',
    uses: [
      'Reporte de fallas en maquinaria y equipos',
      'Solicitudes de mantenimiento preventivo',
      'Incidentes de seguridad e higiene',
      'Fallas en sistemas de energía o climatización',
      'Problemas de infraestructura edilicia',
      'Solicitudes de insumos y materiales',
      'Reclamos de servicios generales',
    ],
    impact: [
      'El operario reporta desde el celular sin burocracia',
      'El jefe de mantenimiento recibe el parte con contexto',
      'Trazabilidad de cada incidente',
      'Reducción de tiempos muertos por falta de información',
    ],
  },
  {
    id: 'corporativo',
    icon: '🏗️',
    tag: 'Facilities',
    title: 'Edificios corporativos y facilities',
    subtitle: 'Gestión profesional de espacios de trabajo',
    desc: 'Los responsables de facilities en edificios corporativos manejan cientos de metros cuadrados y decenas de proveedores. Eliseo centraliza la recepción de reclamos y los distribuye según el tipo y la zona del edificio.',
    uses: [
      'Fallas en sistemas de climatización (HVAC)',
      'Problemas de plomería y sanitarios',
      'Solicitudes de mudanza y reubicación',
      'Fallas eléctricas en oficinas',
      'Problemas de conectividad o cableado',
      'Solicitudes de limpieza especial',
      'Mantenimiento de equipamiento de salas',
      'Control de accesos y seguridad',
    ],
    impact: [
      'Los empleados reportan sin interrumpir al facilities manager',
      'Derivación automática según zona y tipo de reclamo',
      'SLA y trazabilidad para cada proveedor',
      'Mejor experiencia para los ocupantes del edificio',
    ],
  },
];

export default function IndustriasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Industrias
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Eliseo se adapta a cualquier lugar donde haya mantenimiento que gestionar
            </h1>
            <p className="text-xl text-slate-400">
              Consorcios, hoteles, plantas y edificios corporativos. El mismo problema, el mismo canal, la misma solución.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-950">
        <Container>
          <div className="space-y-24">
            {industries.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="grid md:grid-cols-2 gap-10 items-start"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{ind.icon}</span>
                    <span className="bg-indigo-500/15 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-500/25">
                      {ind.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">
                    {ind.title}
                  </h2>
                  <p className="text-sm text-indigo-400 font-medium mb-4">{ind.subtitle}</p>
                  <p className="text-slate-400 mb-6">{ind.desc}</p>
                  <div className="bg-slate-900 rounded-xl p-5 border border-green-500/20">
                    <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">
                      Impacto esperado
                    </h4>
                    <ul className="space-y-2">
                      {ind.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-green-400 font-bold mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-900 rounded-2xl p-6 border border-white/8">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                      Tipos de reclamos que maneja
                    </h3>
                    <ul className="space-y-2">
                      {ind.uses.map((use) => (
                        <li key={use} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-indigo-400 mt-0.5">•</span>
                          {use}
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

      {/* CTA */}
      <section className="py-20 bg-cta-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
        <Container className="relative">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Tu industria no está acá?</h2>
            <p className="text-indigo-200 mb-8">
              Si gestionás un espacio físico con reclamos de mantenimiento, Eliseo probablemente
              puede ayudarte. Conversemos y lo evaluamos.
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
                className="bg-green-500/15 border border-green-400/40 text-green-300 hover:bg-green-500/25 transition-colors"
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
