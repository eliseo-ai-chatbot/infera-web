import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contacto — Pedí tu demo de Eliseo',
  description:
    'Contactá a Infera para pedir una demo de Eliseo o consultar sobre nuestros servicios de consultoría de IA. Respondemos rápido.',
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+5491100000000';
const WA_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=Hola,%20quiero%20pedir%20una%20demo%20de%20Eliseo`;

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Contacto
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Pedí tu demo de Eliseo
            </h1>
            <p className="text-xl text-slate-400">
              Completá el formulario o escribinos directo por WhatsApp.
              Respondemos dentro del día hábil.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Envianos un mensaje</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-6">O escribinos directo</h2>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-500/10 border border-green-500/25 rounded-xl hover:bg-green-500/15 hover:border-green-400/40 transition-colors"
                >
                  <span className="text-4xl">💬</span>
                  <div>
                    <p className="font-semibold text-green-300">WhatsApp</p>
                    <p className="text-sm text-green-400/80">Respuesta inmediata en horario comercial</p>
                    <p className="text-sm font-mono text-green-400 mt-1">{WHATSAPP}</p>
                  </div>
                </a>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 border border-indigo-500/20">
                <h3 className="font-semibold text-slate-100 mb-3">¿Qué incluye la demo?</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    'Conversación en vivo con Eliseo',
                    'Presentación del flujo completo de reclamos',
                    'Casos de uso específicos para tu operación',
                    'Explicación del proceso de implementación',
                    'Respuesta a todas tus preguntas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 border border-white/8">
                <h3 className="font-semibold text-slate-100 mb-3">📍 Dónde estamos</h3>
                <p className="text-sm text-slate-400">
                  Buenos Aires, Argentina.<br />
                  Operamos en toda LatAm de forma remota.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
