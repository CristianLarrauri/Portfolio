import React from "react";

export default function CardProject({
  image,
  link,
  title,
  role,
  description,
  technologies,
}) {
  return (
    <a
      href={link}
      target="blank"
      className="h-96 w-full md:h-72 md:w-full lg:h-72 lg:w-2/3 p-4 flex flex-col md:flex-row justify-evenly items-center text-center border border-azulClaro-0 bg-negro-0 text-white rounded-2xl hover:scale-105 transform transition-transform gap-4"
    >
      <section className="h-full w-full md:h-full md:w-2/5 lg:h-full lg:w-1/3 flex flex-col justify-around items-center text-center">
        <div className="h-full w-full">
          <img
            className="h-full w-full lg:h-full lg:w-full border border-azulClaro-0 object-cover rounded-2xl"
            src={image}
            alt={title}
          />
        </div>
      </section>
      <section className="h-full w-full md:w-2/3 p-5 flex flex-col">
        <div className="h-full w-full flex flex-col justify-evenly gap-5">
          <h3 className="h-full w-full flex justify-center items-start text-center font-bold text-xs md:text-2xl text-azulClaro-0">
            {title}
          </h3>
          <p className="text-xs md:text-base">{description}</p>
          <p className="text-xs md:text-base text-grisOscuro-0">
            {technologies}
          </p>
          <p className="text-xs md:text-base">{role}</p>
        </div>
      </section>
    </a>
  );
}
