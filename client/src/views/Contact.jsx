import React from "react";
import FormContact from "../components/FormContact";

export default function Contact() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center">
      <header className="h-full w-full flex flex-col justify-center items-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Contacta conmigo</h1>
      </header>
      <section className="h-full w-full flex justify-center items-center text-center gap-7 p-10">
        <FormContact />
      </section>
    </div>
  );
}
