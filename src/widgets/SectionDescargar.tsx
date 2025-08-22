import { Apple } from "lucide-react";
import React from "react";

export const SectionDescargar = () => {
  return (
    <section className="py-32 px-4 relative" id="descargar">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8">
          Descarga la app del
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            futuro
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          Únete a la revolución digital de las loterías. Disponible gratis en
          todas las plataformas.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <a
            href="https://play.google.com/store/apps/details?id=com.diazcode.premiospty"
            className="group"
          >
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">
                  Disponible en
                </div>
                <div className="font-bold text-lg">Google Play</div>
              </div>
            </div>
          </a>

          <a
            href="https://apps.apple.com/us/app/loto-latina-resultados-loteria/id6737522426"
            className="group"
          >
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">
                  Descargar en
                </div>
                <div className="font-bold text-lg">App Store</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
