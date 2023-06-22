import React from "react";
import CardProject from "../components/CardProject";
import imgLaReserva from "../images/ProjectLaReserva.jpg";
import imgPyDInventario from "../images/ProjectPyDInventario.jpg";
import imgPokeApp from "../images/ProjectPokeApp.jpg";
import imgPizzasGalacticas from "../images/imgPizzasGalacticas.png";

export default function Projects() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center">
      <header className="h-full w-full flex flex-col justify-center items-center text-center text-4xl font-bold text-grisClaro-0 p-5">
        <h1>Proyectos y colaboraciones</h1>
      </header>
      <section className="h-full w-full p-10 flex flex-col justify-around items-center text-center gap-7 ">
        <CardProject
          image={imgPizzasGalacticas}
          link={"https://pizzasgalacticas.vercel.app/"}
          title={"Pizzas Galácticas Delivery"}
          role={"Frontend"}
          description={"Aplicación web para pedir delivery de Pizzas."}
          technologies={"JavaScript | React | Redux | Tailwind | Firebase "}
        />
        <CardProject
          image={imgPyDInventario}
          link={"https://inventario-frontend-six.vercel.app/"}
          title={"P&D Inventario"}
          role={"Backend"}
          description={"Aplicación web para gestionar stock y producción."}
          technologies={
            "JavaScript | Node | Express | Sequelize | Postgres | Firebase "
          }
        />

        <CardProject
          image={imgLaReserva}
          link={"https://henry-lareserva-front.vercel.app/"}
          title={"La Reserva"}
          role={"FullStack"}
          description={"Aplicación web para inscribirse a torneos de fútbol."}
          technologies={
            "JavaScript | NodeJS | Express | Sequelize | Postgres | React | Redux | Tailwind |  Mercadopago | Auth0 | Cloudinary"
          }
        />

        <CardProject
          image={imgPokeApp}
          link={"https://henry-pokemon-frontend.vercel.app/"}
          title={"PokeApp"}
          role={"FullStack"}
          description={"Aplicación web informativa sobre Pokémon."}
          technologies={
            "JavaScript | React | Redux | CSS | Node | Express | Sequelize | Postgres"
          }
        />
      </section>
    </div>
  );
}
