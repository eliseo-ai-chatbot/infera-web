import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://infera.com.ar'),
  title: {
    default: 'Infera — IA aplicada para PyMEs | Eliseo, asistente de mantenimiento por WhatsApp',
    template: '%s | Infera',
  },
  description:
    'Infera es una consultora de IA para PyMEs en Argentina y LatAm. Eliseo es nuestro asistente por WhatsApp que ordena y deriva reclamos de mantenimiento para administraciones, hoteles y plantas.',
  keywords: ['IA', 'inteligencia artificial', 'PyMEs', 'WhatsApp', 'mantenimiento', 'consorcios', 'Argentina', 'Infera', 'Eliseo'],
  authors: [{ name: 'Infera' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://infera.com.ar',
    siteName: 'Infera',
    title: 'Infera — IA aplicada para PyMEs',
    description:
      'Eliseo: el asistente por WhatsApp que ordena los reclamos de mantenimiento para administraciones y facility managers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Infera — IA aplicada para PyMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infera — IA aplicada para PyMEs',
    description: 'Eliseo: el asistente por WhatsApp que ordena los reclamos de mantenimiento.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-zinc-950 text-slate-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
