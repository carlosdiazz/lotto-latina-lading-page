"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const SectionSliderImagen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/1.png",
      title: "Interfaz Futurista",
      description: "Diseño de próxima generación",
    },
    {
      image: "/2.png",
      title: "Notificaciones Inteligentes",
      description: "IA que predice tus números favoritos",
    },
    {
      image: "/3.png",
      title: "Pagos Biométricos",
      description: "Autenticación con huella y Face ID",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-15 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Vista Real de la App</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora capturas auténticas de la aplicación tal como la usarás en tu dispositivo, con un diseño pensado para ser intuitivo, moderno y lleno de funciones útiles.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="relative w-[350px] h-[750px] mx-auto rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Image
                src={slides[currentSlide].image}
                width={645}
                height={1398}
                alt={slides[currentSlide].title}
                className="h-full w-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass border-white/20 hover:bg-white/10 w-12 h-12 rounded-full bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass border-white/20 hover:bg-white/10 w-12 h-12 rounded-full bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
