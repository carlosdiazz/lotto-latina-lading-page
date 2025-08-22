import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export const SectionDescripcion = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass rounded-3xl p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/logo.png"
                width={500}
                height={400}
                alt="Logo"
                className="rounded-2xl w-full"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              La revolución
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                digital
              </span>
              <br />
              de las loterías
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lotto Latina es la aplicación número uno para consultar resultados de todas las loterías y sorteos de América Latina. Con una interfaz moderna y fácil de usar, te permite acceder en segundos a los números ganadores de tu país y de toda la región, siempre actualizados en tiempo real. Ya no necesitas buscar en diferentes páginas ni esperar a que te avisen: con Lotto Latina tienes toda la información en un solo lugar, de manera rápida, confiable y gratuita.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Disponible para Google Play y Apple Store, Lotto Latina está diseñada para acompañarte en cada jugada, brindándote la mejor experiencia y asegurando que nunca te pierdas un resultado importante.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">
                4.8/5 • 2K+ descargas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
