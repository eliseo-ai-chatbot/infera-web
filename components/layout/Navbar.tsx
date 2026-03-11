'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Eliseo', href: '/eliseo' },
  { label: 'Cómo funciona', href: '/como-funciona' },
  { label: 'Industrias', href: '/industrias' },
  { label: 'Infera', href: '/infera' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/8 shadow-card">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <span className="inline-flex w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white items-center justify-center text-sm font-black">I</span>
            Infera
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contacto" variant="primary" size="sm">
              Pedir demo
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-white/8 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-zinc-950/95">
          <Container>
            <ul className="py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-white/6 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/contacto" variant="primary" size="sm" className="w-full justify-center">
                  Pedir demo
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
