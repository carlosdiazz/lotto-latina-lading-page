import { Award, Shield, Users, Zap } from "lucide-react";
import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

export const SectionCaracteristica = () => {
  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Resultados en Tiempo Real",
      description: "Recibe actualizaciones automáticas de los sorteos más recientes, tan pronto se publican.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Historial Completo",
      description: "Revisa resultados anteriores para analizar tus jugadas y ver estadísticas pasadas.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Notificaciones Inteligentes",
      description: "Configura alertas para tus loterías favoritas y no te pierdas ni un sorteo",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Cobertura Multipaís",
      description: "Loterías de Panamá, República Dominicana, Colombia, México, Argentina, Chile, Venezuela, Perú, Costa Rica, Ecuador, El Salvador, Honduras, Nicaragua, Haití, Uruguay, Puerto Rico, Estados Unidos y más.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Diseño Rápido e Intuitivo",
      description: "Encuentra lo que buscas sin complicaciones, con una app fluida y fácil de usar.",
    },
  ];

  return (
    <section className="py-10 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            ¿Por qué elegir
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Lotto Latina?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lotto Latina es la mejor app del mercado para consultar tus resultados de loterías en toda América Latina, rápida, segura y siempre actualizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                index % 2 === 0 ? "lg:mt-8" : "lg:mb-8"
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
