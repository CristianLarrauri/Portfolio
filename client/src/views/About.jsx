import React from "react";
import CardAboutTech from "../components/CardAboutTech";
import CardAboutStudies from "../components/CardAboutStudies";
import CardAboutLanguages from "../components/CardAboutLanguages";

export default function About() {
  return (
    <>
      <header className="flex flex-col justify-center items-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Mis habilidades</h1>
      </header>
      <section className="flex justify-center gap-7 p-10 text-white">
        <CardAboutTech
          img=""
          title="Herramientas"
          content="Visual Studio Code | Android Studio | Git | GitHub | Postman | Railway | Vercel"
        />
        <CardAboutTech
          img=""
          title="Web"
          content="Javascript | HTML | CSS | Postgres | Sequelize | MongoDB | Mongoose | NodeJS | Express | React | Redux"
        />
        <CardAboutTech img="" title="Android" content="Kotlin | XML" />
      </section>
      <section className="flex flex-col justify-center items-center text-white gap-10 ">
        <CardAboutStudies />
        <CardAboutLanguages />
      </section>
    </>
  );
}
