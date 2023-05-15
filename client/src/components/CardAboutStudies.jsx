import React from "react";

export default function CardAboutStudies() {
  return (
    <div className="flex border border-lilaClaro-0 w-1/2 h-72  rounded-2xl">
      <div className="w-1/2 h-full border-r flex justify-center items-center">
        <h2>Estudio</h2>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <p>Web FullStack | Henry</p>
        <p>Android | Autodidacta</p>
      </div>
    </div>
  );
}
