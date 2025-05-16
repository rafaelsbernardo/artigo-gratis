import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700">4.8 de 5</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-automatik-teal">Crie dezenas de artigos </span>
              <span className="text-automatik-purple">para seu blog em minutos, não dias</span>
            </h1>
            
            <p className="text-lg text-gray-700">
              Descubra como você pode economizar tempo, aumentar sua audiência e crescer seu faturamento através de publicações automatizadas em seu blog
            </p>
            
            <Button 
              className="btn-gradient text-lg py-6 px-8 rounded-full hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Gerar artigo grátis agora
            </Button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="dashboard-card bg-white rounded-2xl shadow-xl p-5">
                <div className="space-y-2 mb-4">
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-teal-200 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-teal-200 rounded-full w-full"></div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-purple-300 to-teal-300 rounded-lg mb-6"></div>
                
                <div className="flex justify-between items-center">
                  <div className="w-1/2">
                    <div className="h-2 bg-gray-200 rounded-full w-full mb-2">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-teal-400 rounded-full w-[70%]"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-2 bg-purple-300 rounded-full w-8"></div>
                      <div className="h-2 bg-purple-300 rounded-full w-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 bottom-0 transform -translate-y-4 -translate-x-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-xs font-bold text-gray-700">SEO</div>
                <div className="text-2xl font-bold text-teal-500">91</div>
                <div className="text-xs text-gray-500">DE 100</div>
              </div>
              
              <div className="absolute right-4 bottom-0 transform -translate-y-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="text-xs">ÚLTIMOS 30 DIAS</div>
                <div className="text-sm font-bold">1,350 views</div>
                <div className="text-xs text-teal-500 bg-teal-100 px-2 rounded-full inline-block mt-1">+35%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -top-20 -right-20 w-64 h-64 bg-automatik-teal/10 rounded-full mix-blend-multiply"></div>
      <div className="hidden md:block absolute -bottom-32 -left-20 w-80 h-80 bg-automatik-purple/10 rounded-full mix-blend-multiply"></div>
    </section>
  );
};

export default HeroSection;