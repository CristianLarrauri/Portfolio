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
    <div className="border border-lilaClaro-0 text-white rounded-2xl w-2/3 h-72 flex p-4">
      <div className="w-1/3 h-full flex flex-col items-center justify-around">
        <a className=" w-4/5 h-4/5 hover:scale-105" href={link} target="blank">
          <img
            className="border object-cover border-lilaClaro-0  rounded-2xl w-full h-full"
            src={image}
            alt={title}
          />
        </a>
      </div>
      <div className="w-2/3 h-full flex flex-col items-center justify-evenly">
        <section className="items-center text-center flex flex-col gap-5">
          <h3 className="font-bold text-2xl mb-4 text-lilaClaro-0">{title}</h3>
          <p>{description}</p>
          <p className="text-grisOscuro-0">{technologies}</p>
          <p>{role}</p>
        </section>
      </div>
    </div>
  );
}
