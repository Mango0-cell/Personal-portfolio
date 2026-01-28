import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { About } from './components/sections/About';
// ELIMINAMOS TEMPORALMENTE WORK EXPERIENCE//import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen px-10 py-8 bg-zinc-950 text-zinc-200 overflow-x-hidden">
      <Navbar />
      <main className="portfolio-container w-full flex flex-col items-center pt-16 md:pt-20">
        <Hero />
        {/* <Experience /> */}
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
