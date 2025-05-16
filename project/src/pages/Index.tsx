
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExamplesSection from '@/components/ExamplesSection';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
    // Registrar visualização de página no Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ExamplesSection />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
