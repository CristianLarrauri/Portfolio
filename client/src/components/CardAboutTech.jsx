import React from "react";

export default function CardAboutTech({ img, title, content }) {
  return (
    <div className="border border-lilaClaro-0 w-80 h-80 flex flex-col justify-center items-center p-4 rounded-2xl">
      <img src={img} alt="imagen card" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
