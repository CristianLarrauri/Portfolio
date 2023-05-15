import React from "react";

export default function CardProject({
  image,
  title,
  role,
  description,
  technologies,
}) {
  return (
    <>
      <section>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{role}</p>
      </section>
      <section>
        <p>{description}</p>
        <p>{technologies}</p>
      </section>
    </>
  );
}
