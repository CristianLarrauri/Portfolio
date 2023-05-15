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
    <>
      <form onSubmit={sendEmail}>
        <label>Nombre: </label>

        <input type="text" name="user_name" onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="user_email" onChange={handleChange} />

        <label>Mensaje</label>
        <textarea
          name="user_message"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        {formErrors.user_email ||
        formErrors.user_name ||
        formErrors.user_message ||
        input.user_name === "" ||
        input.user_email === "" ||
        input.user_message === "" ? (
          <h5>Por favor, complete correctamente los campos requeridos</h5>
        ) : (
          <div>
            <button>Send email</button>
          </div>
        )}
      </form>
    </>
  );
}
