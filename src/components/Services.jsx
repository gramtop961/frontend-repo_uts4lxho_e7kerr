import { Rocket, Palette, LineChart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Rocket,
    title: 'Launch-ready Websites',
    desc: 'Lightning-fast, SEO-optimized sites that convert visitors into superfans.',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: LineChart,
    title: 'Growth & Performance',
    desc: 'Paid media, analytics, and funnels engineered for compounding ROI.',
    color: 'from-cyan-400 to-sky-500'
  },
  {
    icon: Palette,
    title: 'Brand & Visuals',
    desc: 'Vibrant, modern identities that feel alive across every touchpoint.',
    color: 'from-emerald-400 to-lime-400'
  },
  {
    icon: Smartphone,
    title: 'Interactive Experiences',
    desc: '3D, motion, and tactile micro-interactions that invite play.',
    color: 'from-orange-400 to-amber-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-white"
        >
          What we do
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${s.color} text-white shadow-lg shadow-black/20`}>
                <s.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform group-hover:translate-x-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
