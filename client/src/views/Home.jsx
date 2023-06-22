import React from "react";
import GitHub from "../components/GitHub.jsx";
import imgPortfolio from "../images/imgPerfil.png";

export default function Home() {
  return (
    <>
      <section className="flex justify-center gap-5 p-10">
        <div className="animate__animated animate__fadeInDown animate__delay-5s">
          <img
            src={imgPortfolio}
            alt="imagen portada"
            className="rounded-full w-auto h-80 shadow-lg shadow-celesteOscuro-0"
          />
        </div>
        <div className="flex justify-center text-center items-center p-10 text-grisClaro-0 flex-col">
          <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
            Hola! Mi nombre es Cristian
          </h1>
          <h2 className="text-xl text-azulClaro-0 animate__animated animate__fadeInDown animate__delay-1s">
            vivo en Córdoba-Argentina y soy desarrollador Full-Stack.
          </h2>
          <p className="text-grisClaro-0 text-m animate__animated animate__fadeInDown animate__delay-2s">
            Tengo experiencia en liderazgo de grupos en distintos ámbitos, por
            lo cual la organización y el trabajo en equipo son mi fuerte.
          </p>
          <p className="text-grisClaro-0 text-m animate__animated animate__fadeInDown animate__delay-3s">
            En mi encontraras una persona proactiva, responsable y con la
            curiosidad como motor del aprendizaje.
          </p>
        </div>
      </section>
      <section className="animate__animated animate__fadeInDown animate__delay-4s">
        <GitHub />
      </section>
    </>
  );
}
