
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center max-w-md px-4">
        <Logo className="mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! Página não encontrada
        </p>
        <Button 
          className="btn-gradient"
          onClick={() => window.location.href = '/'}
        >
          Voltar para o início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
