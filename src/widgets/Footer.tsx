import { Badge } from "@/components/ui/badge";

import React from "react";

export const Footer = () => {
  return (
    <footer className=" text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 DiazCode. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              Hecho con ❤️ por DiazCode
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};
