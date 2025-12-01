"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  // PENTING: Ganti "xzznrbqd" dengan Form ID asli dari dashboard Formspree Anda jika berbeda
  const [state, handleSubmit] = useForm("xzznrbqd");

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-2xl text-green-800 mb-2">
          Pesan Terkirim!
        </h3>
        <p className="text-green-600">
          Terima kasih telah menghubungi Keno Creative. Kami akan membalas
          secepatnya.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-sm font-bold text-green-700 underline hover:text-green-900"
        >
          Kirim pesan lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tampilan Error Umum jika ada masalah koneksi */}
      {state.errors && state.errors.length > 0 && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-red-100">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>
            Gagal mengirim pesan. Pastikan Form ID benar atau coba lagi nanti.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors bg-gray-50"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors bg-gray-50"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-bold text-gray-700">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent transition-colors bg-gray-50"
        >
          <option value="Illustration">Illustration Project</option>
          <option value="Web Design">Web Design & Dev</option>
          <option value="Branding">Visual Identity</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent transition-colors bg-gray-50"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
        {!state.submitting && (
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )}
      </button>
    </form>
  );
}
