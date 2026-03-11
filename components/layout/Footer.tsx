import Link from 'next/link';
import Container from '@/components/ui/Container';

const footerLinks = {
  producto: [
    { label: 'Eliseo', href: '/eliseo' },
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Industrias', href: '/industrias' },
  ],
  empresa: [
    { label: 'Sobre Infera', href: '/infera' },
    { label: 'Contacto', href: '/contacto' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              Infera
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              IA aplicada para PyMEs: de los datos al impacto operativo. Sede en Buenos Aires, Argentina.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Producto destacado:{' '}
              <Link href="/eliseo" className="text-indigo-400 hover:text-indigo-300 underline">
                Eliseo
              </Link>{' '}
              — el asistente por WhatsApp para gestión de mantenimiento.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Producto
            </h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {year} Infera. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Buenos Aires, Argentina
          </p>
        </div>
      </Container>
    </footer>
  );
}
