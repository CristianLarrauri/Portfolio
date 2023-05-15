import React from "react";
import CardProject from "../components/CardProject";

export default function Projects() {
  return (
    <>
      <header>
        <h1>Proyectos y colaboraciones</h1>
      </header>
      <section>
        <CardProject
          image={""}
          title={"P&D Inventario"}
          role={"Backend"}
          description={"Aplicación web para gestionar stock y producción"}
          technologies={
            "JavaScript | Node | Express | Sequelize | Postgres | Firebase "
          }
        />

        <CardProject
          image={""}
          title={"La Reserva"}
          role={"FullStack"}
          description={
            "Aplicación web para inscribirse a torneos de fútbol con opción de acceder a la información del mismo (tabla de posiciones y goleadores)"
          }
          technologies={
            "JavaScript | NodeJS | Express | Sequelize | Postgres | React | Redux | Tailwind |  Mercadopago | Auth0 | Cloudinary"
          }
        />

        <CardProject
          image={""}
          title={"PokeApp"}
          role={"FullStack"}
          description={"Aplicación web informativa sobre Pokémon"}
          technologies={
            "JavaScript | React | Redux | CSS | Node | Express | Sequelize | Postgres"
          }
        />
      </section>
    </>
  );
}
