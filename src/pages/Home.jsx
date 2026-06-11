import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import StructuralSolutions from '../components/StructuralSolutions';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <StructuralSolutions />
      <Technologies />
      <Contact />
    </main>
  );
}
