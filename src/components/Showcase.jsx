import { motion } from 'framer-motion';

const works = [
  {
    title: 'NeoGlow Cosmetics',
    tag: 'Ecommerce · Brand',
    img: 'https://images.unsplash.com/photo-1556228578-8e8f1a6b9e46?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-fuchsia-500/30 via-cyan-400/20 to-emerald-400/30'
  },
  {
    title: 'Orbit SaaS',
    tag: 'Web App · Growth',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-cyan-400/30 via-blue-400/20 to-indigo-400/30'
  },
  {
    title: 'Sunset Studio',
    tag: 'Portfolio · Motion',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-amber-400/30 via-orange-400/20 to-pink-400/30'
  }
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-white"
        >
          Selected work
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${w.gradient}`} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                  <span className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80">{w.tag}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
