import React from "react";
import FormContact from "../components/FormContact";

export default function Contact() {
  return (
    <>
      <header className="flex flex-col justify-center items-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Contacta conmigo</h1>
      </header>
      <section className="flex justify-center gap-7 p-10">
        <FormContact />
      </section>
    </>
  );
}
