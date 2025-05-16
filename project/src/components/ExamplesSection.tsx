import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ExamplesSection = () => {
  return (
    <section id="exemplos" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemplos de artigos gerados</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Confira a qualidade dos artigos produzidos pela nossa plataforma em diversos nichos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.slice(0, 3).map((example, index) => (
            <a 
              key={index} 
              href={example.url || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg h-full flex flex-col">
                <img 
                  src={example.imageUrl} 
                  alt={example.title} 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{example.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{example.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500">{example.readTime} min de leitura</span>
                    <div className="flex gap-1">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">SEO {example.seoScore}</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const examples = [
  {
    title: "Google se compromete a capacitar 1 milhão de brasileiros em inteligência artificial com cursos gratuitos",
    excerpt: "Descubra como o Google vai ajudar 1 milhão de brasileiros a aprender inteligência artificial com cursos gratuitos e acessíveis para todos.",
    category: "Tecnologia",
    readTime: 7,
    seoScore: 95,
    url: "https://automatikblog.com/blog/google-se-compromete-a-capacitar-1-milhao-de-brasileiros-em-inteligencia-artificial-com-cursos-gratuitos/",
    imageUrl: "/lovable-uploads/google-se-compromete-a-capacitar-milhao-de-brasileiros-em-inteligencia-artificial-com-cursos-gratu-768x432.jpg"
  },
  {
    title: "Brownie recheado de frutas vermelhas: Delícia úmida e decadente com preparo fácil em apenas 30 minutos",
    excerpt: "Descubra como fazer um brownie recheado de frutas vermelhas, uma delícia úmida e fácil que vai impressionar a todos.",
    category: "Culinária",
    readTime: 5,
    seoScore: 92,
    url: "https://automatikblog.com/blog/brownie-recheado-de-frutas-vermelhas-delicia-umida-e-decadente-com-preparo-facil-em-apenas-30-minutos/",
    imageUrl: "/lovable-uploads/brownie-recheado-de-frutas-vermelhas-delicia-umida-e-decadente-com-preparo-facil-em-apenas-minuto-768x432.jpg"
  },
  {
    title: "Como a inteligência artificial está mudando a forma como vivemos e trabalhamos",
    excerpt: "Descubra como a inteligência artificial está transformando nossa vida e trabalho de formas surpreendentes. Prepare-se para o futuro.",
    category: "Tecnologia",
    readTime: 8,
    seoScore: 96,
    url: "https://automatikblog.com/blog/como-a-inteligencia-artificial-esta-mudando-a-forma-como-vivemos-e-trabalhamos/",
    imageUrl: "/lovable-uploads/como-a-inteligencia-artificial-esta-mudando-a-forma-como-vivemos-e-trabalhamos-768x432.jpg"
  }
];

export default ExamplesSection;