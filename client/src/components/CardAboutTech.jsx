import React, { useState, useEffect } from "react";
import "animate.css";

export default function CardAboutTech({ icon, title, content }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animateFlipInY, setAnimateFlipInY] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setAnimateFlipInY(true);
    setTimeout(() => {
      setAnimateFlipInY(false);
    }, 500);
  };

  // useEffect(() => {}, [isFlipped]);

  return (
    <div
      className={`h-72 w-56 p-6 flex flex-col justify-center text-center items-center bg-negro-0 rounded-2xl hover:scale-105 transform transition-transform cursor-pointer animate__animated shadow-lg shadow-celesteOscuro-0 ${
        animateFlipInY ? "animate__flipInY" : ""
      }`}
      onClick={handleCardClick}
    >
      <header
        className={`h-72 w-64 flex flex-col justify-around items-center text-center ${
          isFlipped ? "hidden" : ""
        }`}
      >
        <div className="text-grisClaro-0 h-2/5 w-2/5 flex justify-center items-center text-center">
          {icon}
        </div>
        <h2 className="font-bold text-xl text-azulClaro-0">{title}</h2>
      </header>
      <section
        className={`h-72 w-64 flex flex-col justify-start items-center text-center ${
          isFlipped ? "" : "hidden"
        } animate__animated animate__fadeIn`}
      >
        {Array.isArray(content) ? (
          content.map((element, index) => <p key={index}>{element}</p>)
        ) : (
          <p>{content}</p>
        )}
      </section>
    </div>
  );
}
