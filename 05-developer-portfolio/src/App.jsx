import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Cursor from './components/Cursor';

import './App.css';

const App = () =>
{
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-x-hidden">

      {/* Optional: glassy blur background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none glassy-bg-animated"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 80%)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      ></div>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
