import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute top-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Bright. Bold. Beyond.
            <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Digital marketing that moves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-white/80"
          >
            We craft playful, high-converting experiences across web, brand and growth. Tap, drag, explore — this site responds to your touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-black font-semibold shadow-[0_20px_50px_-12px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(255,255,255,0.6)] transition-all">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:border-white/40 hover:text-white transition-colors">
              See our work
            </a>
          </motion.div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
