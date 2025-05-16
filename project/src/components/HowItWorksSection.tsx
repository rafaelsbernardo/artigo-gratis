
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const HowItWorksSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="como-funciona" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Como funciona em <span className="text-automatik-teal">3 passos simples</span>
          </h2>
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experimentar o Automatik Blog é rápido e fácil. Veja como você pode gerar seu primeiro artigo gratuitamente:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md p-8 text-center relative transform transition-all duration-700 delay-${index * 300} hover:shadow-lg hover:-translate-y-2 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10 animate-pulse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#00C2C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="btn-gradient text-lg rounded-full hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero gerar meu artigo grátis
          </Button>
        </div>
      </div>
      
      {/* Círculos decorativos */}
      <div className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 bg-automatik-purple/5 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

const steps = [
  {
    title: "Faça seu cadastro",
    description: "Preencha o formulário com seus dados básicos para ter acesso à plataforma."
  },
  {
    title: "Escolha o tema do artigo",
    description: "Defina o assunto sobre o qual você deseja que seu artigo seja escrito."
  },
  {
    title: "Receba no WhatsApp",
    description: "Seu artigo será gerado e enviado diretamente para o seu WhatsApp em minutos."
  }
];

export default HowItWorksSection;
