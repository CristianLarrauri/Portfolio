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
      className={`border border-lilaClaro-0 w-80 h-80 flex flex-col justify-between text-center items-center p-6 rounded-2xl hover:scale-105 animate__animated ${
        animateFlipInY ? "animate__flipInY" : ""
      }`}
      onClick={handleCardClick}
    >
      <header
        className={`flex flex-col justify-between items-center h-3/5 w-3/5 ${
          isFlipped ? "hidden" : ""
        }`}
      >
        <div className="text-grisClaro-0 w-2/3 h-2/3 flex justify-center items-center">
          {icon}
        </div>
        <h2 className="font-bold text-xl text-lilaClaro-0">{title}</h2>
      </header>
      <section
        className={`${
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
