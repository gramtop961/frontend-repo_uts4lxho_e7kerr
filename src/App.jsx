import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Flames Agency — Bright ideas, bold results.
      </footer>
    </div>
  );
}
