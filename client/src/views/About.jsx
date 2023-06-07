import React from "react";
import CardAboutTech from "../components/CardAboutTech";
import { AiFillTool, AiFillAndroid } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function About() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center">
      <header className="h-full w-full flex flex-col justify-center items-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Tecnologías y habilidades</h1>
      </header>
      <section className="h-full w-full p-10 flex flex-col lg:flex-row justify-center items-center text-center gap-5 text-white">
        <CardAboutTech
          icon={<AiFillTool className="w-full h-full" />}
          title="Herramientas"
          content={[
            "Visual Studio Code",
            "Android Studio",
            "Git",
            " GitHub",
            "Postman",
            " Railway",
            "Vercel",
          ]}
        />
        <CardAboutTech
          icon={<TfiWorld className="w-full h-full" />}
          title="Web"
          content={[
            "Javascript",
            "PostgreSQL",
            "Sequelize",
            "MongoDB",
            "Mongoose",
            "NodeJS",
            "Express",
            "React",
            "Redux",
            "Tailwind",
          ]}
        />
        <CardAboutTech
          icon={<AiFillAndroid className="w-full h-full" />}
          title="Android"
          content={["Kotlin ", " XML"]}
        />
        <CardAboutTech
          icon={<FaGraduationCap className="w-full h-full" />}
          title="Estudios"
          content={["Web FullStack | Henry", "Android | Autodidacta"]}
        />
        <CardAboutTech
          icon={<BsFillChatDotsFill className="w-full h-full" />}
          title="Idiomas"
          content={["Español | Nativo"]}
        />
      </section>
    </div>
  );
}
