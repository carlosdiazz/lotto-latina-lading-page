import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

export const SectionHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border text-sm font-medium">
            Lotto Latina - Resultados de Loterias
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold leading-none">
            Lotto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Latina
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            ¿Juegas a la lotería y quieres estar siempre al día? Lotto Latina es
            tu nueva aliada para consultar los resultados más recientes de más
            de 100 loterías oficiales de toda América Latina, Centroamérica, el
            Caribe, y también de Estados Unidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-6 w-6" />
              Descargar Gratis
            </Button>
            {/**
             * <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 text-foreground hover:bg-primary/5 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              Ver Demo en Vivo
            </Button>
             */}
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/logo.png"
              width={500}
              height={400}
              alt="Logo"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
