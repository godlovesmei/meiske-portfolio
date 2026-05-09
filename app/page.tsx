import HUD from '../components/HUD';
import Hero from '../components/Hero';
import BioMission from '../components/BioMission';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <HUD />
      
      {/* Background decoration lines */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.2 }}>
        <div style={{ position: 'absolute', top: 0, left: '25%', width: '1px', height: '100%', backgroundColor: 'var(--neon-cyan)' }}></div>
        <div style={{ position: 'absolute', top: 0, right: '25%', width: '1px', height: '100%', backgroundColor: 'var(--neon-pink)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'var(--neon-yellow)' }}></div>
      </div>

      <Hero />
      <BioMission />
      <Projects />
      <Contact />
      
      {/* Decorative Footer */}
      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '80px', position: 'relative', zIndex: 10 }}>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', letterSpacing: '2px', fontSize: '0.875rem', textTransform: 'uppercase' }}>
          SYSTEM_READY // [MEISKE.DEV] // 2026
        </p>
      </footer>
    </main>
  );
}
