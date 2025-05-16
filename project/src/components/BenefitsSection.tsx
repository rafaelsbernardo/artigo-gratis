
import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Esta será a <span className="text-automatik-purple">única ferramenta</span> que você vai precisar
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Confiado por +5.000 blogs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {benefit.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Linguagem Humana",
    description: "Textos fluídos e naturais, que parecem escritos por uma pessoa de verdade — sem aquele jeitão robótico das IAs comuns.",
    icon: <path d="M32 16C36.4183 16 40 19.5817 40 24V28C40 32.4183 36.4183 36 32 36C27.5817 36 24 32.4183 24 28V24C24 19.5817 27.5817 16 32 16ZM48 48C48 40.268 40.837 34 32 34C23.163 34 16 40.268 16 48" stroke="#00C2C7" strokeWidth="2" strokeLinecap="round"/>,
  },
  {
    title: "SEO Avançado",
    description: "Artigos otimizados automaticamente com as melhores práticas de SEO. Títulos, slugs, headings e muito mais pensados para rankear.",
    icon: <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z M32 32L42 22 M32 32L32 16" stroke="#00C2C7" strokeWidth="2" strokeLinecap="round"/>,
  },
  {
    title: "Tráfego Multicanal",
    description: "Vá além do Google: conquiste tráfego também com Web Stories, Pinterest e LinkedIn, tudo integrado direto na plataforma.",
    icon: <path d="M13.3333 45.3333V18.6667C13.3333 15.7211 15.7211 13.3333 18.6667 13.3333H45.3333C48.2789 13.3333 50.6667 15.7211 50.6667 18.6667V45.3333C50.6667 48.2789 48.2789 50.6667 45.3333 50.6667H18.6667C15.7211 50.6667 13.3333 48.2789 13.3333 45.3333Z M26.6667 26.6667L37.3333 37.3333 M37.3333 26.6667L26.6667 37.3333" stroke="#00C2C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
  }
];

export default BenefitsSection;
