import React from "react";
import PdfResume from "../components/PdfResume";

export default function Resume() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center">
      <header className="h-full w-full flex flex-col justify-center items-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Hoja de vida</h1>
      </header>
      <section className="w-full flex justify-center gap-7 p-10">
        <PdfResume />
      </section>
    </div>
  );
}
