import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-400">
              Automatize a criação de conteúdo otimizado para seu blog sem perder a essência humana.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#exemplos" className="text-gray-400 hover:text-white transition-colors">Exemplos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://automatikblog.com/termos-de-uso/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="https://automatikblog.com/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">contato@automatikblog.com</li>
              <li className="flex gap-4 mt-4">
                <a href="https://instagram.com/automatikblog" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Automatik Blog. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;