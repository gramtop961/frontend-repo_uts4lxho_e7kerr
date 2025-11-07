import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let’s build something bright</h2>
          <p className="mt-3 text-white/80">Tell us about your project. We’ll get back in a flash.</p>

          {!submitted ? (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Alex Bright" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="you@brand.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70">Project details</label>
                <textarea rows={5} required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Website redesign, paid social strategy, brand vibe..." />
              </div>
              <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center rounded-full bg-white px-6 py-3 text-black font-semibold shadow-[0_20px_50px_-12px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(255,255,255,0.6)] transition-all">
                  Send message
                </button>
                <span className="text-white/60 text-sm">No spam. No pressure. Pure good vibes.</span>
              </div>
            </form>
          ) : (
            <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-200">
              Thanks! We’ll reach out shortly.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
