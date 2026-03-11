'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', company: '', message: '' };

const inputClasses =
  'w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500/50 transition-colors';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { name, email, company, message } = form;
    const subject = `Demo request - ${company || name}`;
    const body = `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\n${message}`;
    window.location.href = `mailto:hola@infera.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/25 rounded-xl p-8 text-center">
        <span className="text-4xl mb-3 block">🎉</span>
        <h3 className="text-lg font-bold text-green-300 mb-2">¡Gracias por escribirnos!</h3>
        <p className="text-sm text-green-400/80">
          Tu cliente de correo debería haberse abierto. Si no, escribinos directamente a{' '}
          <a href="mailto:hola@infera.com.ar" className="underline font-medium text-green-300">
            hola@infera.com.ar
          </a>
          .
        </p>
        <button
          onClick={() => { setForm(initialState); setSubmitted(false); }}
          aria-label="Volver al formulario para enviar otro mensaje"
          className="mt-4 text-sm text-green-400 underline hover:text-green-200 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
          Nombre <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tu@empresa.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
          Empresa / Administración
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Nombre de tu empresa u organización"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
          Mensaje <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Contanos brevemente tu situación actual y qué te gustaría resolver..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full justify-center">
        Enviar mensaje →
      </Button>

      <p className="text-xs text-slate-500 text-center">
        Al enviar, se abrirá tu cliente de correo. También podés escribirnos directamente a{' '}
        <a href="mailto:hola@infera.com.ar" className="underline text-slate-400 hover:text-slate-200 transition-colors">
          hola@infera.com.ar
        </a>
        .
      </p>
    </form>
  );
}
