"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Star, Download, Apple, Zap, Users, Award } from "lucide-react"
import Image from "next/image"
import {  SectionCaracteristica, SectionHero } from "@/widgets"

export default function LottoLatinaLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)


  const slides = [
    {
      image: "/logo.png",
      title: "Interfaz Futurista",
      description: "Diseño de próxima generación",
    },
    {
      image: "/logo.png",
      title: "Notificaciones Inteligentes",
      description: "IA que predice tus números favoritos",
    },
    {
      image: "/logo.png",
      title: "Pagos Biométricos",
      description: "Autenticación con huella y Face ID",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SectionHero />

      <SectionCaracteristica/>


      <section className="py-32 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Experiencia Inmersiva</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada detalle diseñado para maximizar tu diversión y ganancias
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            <div className="glass rounded-3xl p-6 shadow-2xl">
              <div className="relative h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
                <Image
                                    src="/logo.png"
                  width={500}
                  height={400}
                  alt="Logo"

                  className="h-full w-auto object-contain transition-all duration-500"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <h3 className="font-bold text-2xl mb-3">{slides[currentSlide].title}</h3>
              <p className="text-muted-foreground text-lg">{slides[currentSlide].description}</p>
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
                    index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital</span>
                <br />
                de las loterías
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Lotto Latina combina la emoción tradicional de la lotería con tecnología de inteligencia artificial para
                crear una experiencia única e inmersiva.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con más de 2 millones de usuarios activos y $50M+ en premios entregados, somos la plataforma de
                confianza para jugadores en toda Latinoamérica.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5 • 50K+ reseñas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            Descarga la app del
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">futuro</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Únete a la revolución digital de las loterías. Disponible gratis en todas las plataformas.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <a href="#" className="group">
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Disponible en</div>
                  <div className="font-bold text-lg">Google Play</div>
                </div>
              </div>
            </a>

            <a href="#" className="group">
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Apple className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Descargar en</div>
                  <div className="font-bold text-lg">App Store</div>
                </div>
              </div>
            </a>
          </div>

          <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="font-bold text-3xl mb-6">¿Listo para cambiar tu suerte?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Descarga ahora y recibe $10 USD de bono de bienvenida + números de la suerte generados por IA
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-3 h-6 w-6" />
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="font-bold text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Lotto Latina
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">El futuro de las loterías digitales en Latinoamérica</p>
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-sm text-muted-foreground">
              © 2024 Lotto Latina. Todos los derechos reservados. Juega responsablemente. +18
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}