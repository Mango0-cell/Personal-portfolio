'use client';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Full-screen particle background — fixed so it covers the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
