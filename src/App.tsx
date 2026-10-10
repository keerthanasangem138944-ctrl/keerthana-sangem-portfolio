import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Top scroll reading progress indicator */}
      <ScrollProgress />

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content landmark */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      {/* Interactive Chatbot */}
      <Chatbot />

      {/* Floating Back to top button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
