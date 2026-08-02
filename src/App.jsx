import { useReveal } from './hooks/useReveal';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Communication from './components/Communication';
import Design from './components/Design';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Rule() {
  return <hr className="h-px bg-border border-0 m-0" />;
}

export default function App() {
  // Attach IntersectionObserver for all .reveal and .tr elements after render
  useReveal([]);

  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[200] bg-text-primary text-black px-[18px] py-3 focus:left-0"
      >
        Skip to content
      </a>

      <Cursor />
      <Header />

      <main id="main">
        <Hero />
        <WhatIDo />
        <Rule />
        <About />
        <Rule />
        <FeaturedWork />
        <Rule />
        <Communication />
        <Rule />
        <Design />
        <Rule />
        <Certifications />
        <Rule />
        <Resume />
        <Rule />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
