import { React, useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setFormErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const [formErrors, setFormErrors] = useState({});

  const validateName = (str) => {
    if (str.length < 1) return true;
  };

  const validateEmail = (str) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input.user_email
      )
    )
      return true;
  };

  const validateMessage = (str) => {
    if (str.length < 1) return true;
  };

  const validate = (data) => {
    let errors = {};
    if (validateName(data.user_name)) errors.user_name = "Invalid name";
    if (validateEmail(data.user_email)) errors.user_email = "Invalid email";
    if (validateMessage(data.user_message))
      errors.user_message = "the message can't be empty";

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7kl8wd6",
        "template_lafzgdg",
        e.target,
        "AiyQDAgLTEB6RKjGa"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    alert("Mensaje enviado con exito");
    window.location.reload();
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center">
      <form
        className="h-2/3 w-full md:w-2/3 p-10 flex flex-col border border-lilaClaro-0 gap-5 rounded-2xl"
        onSubmit={sendEmail}
      >
        <input
          className="pl-[7px] border border-lilaClaro-0 rounded-xl bg-transparent text-white outline-none"
          type="text"
          name="user_name"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          className="pl-[7px] border border-lilaClaro-0 rounded-xl bg-transparent text-white outline-none"
          type="email"
          name="user_email"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          className="pl-[7px] border border-lilaClaro-0 rounded-xl bg-transparent text-white outline-none "
          name="user_message"
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje"
          onChange={handleChange}
        ></textarea>

        {formErrors.user_email ||
        formErrors.user_name ||
        formErrors.user_message ||
        input.user_name === "" ||
        input.user_email === "" ||
        input.user_message === "" ? (
          <p className="text-grisClaro-0 text-center">
            Por favor, complete correctamente los campos requeridos.
          </p>
        ) : (
          <div className="flex justify-end">
            <button
              className="border border-lilaClaro-0 rounded-xl p-3 mt-5 text-grisClaro-0 hover:scale-110 hover:text-lilaClaro-0 hover:font-bold"
              onClick={sendEmail}
            >
              Enviar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
