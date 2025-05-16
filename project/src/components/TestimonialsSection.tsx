
import React from 'react';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="depoimentos" className="py-20 bg-gradient-light relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            O que dizem nossos usuários
          </h2>
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Veja como o Automatik Blog tem ajudado blogueiros e agências de marketing a escalar sua produção de conteúdo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md p-6 transition-all duration-700 hover:shadow-lg hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M18 20a6 6 0 0 0-12 0"></path>
                    <circle cx="12" cy="10" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Círculos decorativos */}
      <div className="hidden lg:block absolute -top-32 -left-32 w-96 h-96 bg-automatik-teal/5 rounded-full animate-float"></div>
      <div className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 bg-automatik-purple/5 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Blogueira de Lifestyle",
    text: "O Automatik Blog revolucionou meu fluxo de trabalho. Consigo criar conteúdo de qualidade em uma fração do tempo que gastava antes. E o melhor: os artigos estão realmente trazendo tráfego orgânico!"
  },
  {
    name: "Rafael Santos",
    role: "Agência de Marketing Digital",
    text: "Como agência, precisamos entregar volume sem perder qualidade. O Automatik nos permitiu triplicar nossa produção de conteúdo para clientes, mantendo um padrão consistente e otimizado para SEO."
  },
  {
    name: "Juliana Mendes",
    role: "Blog de Finanças",
    text: "Estava cética sobre usar IA para criar conteúdo, mas os textos do Automatik são impressionantemente naturais. Meus leitores não perceberam diferença e meus números de tráfego aumentaram 67%!"
  }
];

export default TestimonialsSection;
