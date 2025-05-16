import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="container flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="font-medium text-gray-700 hover:text-automatik-teal transition-colors">Como funciona</a>
          <a href="#beneficios" className="font-medium text-gray-700 hover:text-automatik-teal transition-colors">Benefícios</a>
          <a href="#depoimentos" className="font-medium text-gray-700 hover:text-automatik-teal transition-colors">Depoimentos</a>
          <a href="#exemplos" className="font-medium text-gray-700 hover:text-automatik-teal transition-colors">Exemplos</a>
        </nav>
        <Button 
          className="bg-gradient-cta hover:opacity-90 ml-4"
          onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Gerar artigo grátis
        </Button>
      </div>
    </header>
  );
};

export default Header;
