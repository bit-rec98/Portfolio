import { useRef } from "react";
import "../../css/contactForm.css";
import * as emailjs from "@emailjs/browser";

const ContactForm = ({ darkMode, spanishLanguage }) => {
  const handleFormData = () => {

    let formData = {
      // inputEmailId: document.querySelector("#form-input-email"),
      inputName: document.querySelector("#form-input-name").value,
      inputEmail: document.querySelector("#form-input-email").value,
      inputMessage: document.querySelector("#form-input-message").value,
    };



  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /* let formData = {
      inputName: document.querySelector("#form-input-name").value,
      inputEmailId: document.querySelector("#form-input-email"),
      inputEmail: document.querySelector("#form-input-email").value,
      inputMessage: document.querySelector("#form-input-message").value,
    };

    console.log(formData) */

    emailjs
      .sendForm('contact_form_service', 'contact_form', form.current, {
        publicKey: '7XevyQOaWfHXqKccU',
      })
      .then(
        (res) => {
          console.log('SUCCESS!', res.status);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  /* const handleInputNameData = () => {
    let formInput = document.querySelector("#form-input-name")

    console.log(formInput.value)

  } */

  /* const handleInputEmailData = () => {
    let formInput = document.querySelector("#form-input-email")

    console.log(formInput.value)

  } */

  /* const handleInputMessageData = () => {
    let formInput = document.querySelector("#form-input-message")

    console.log(formInput.value)
  } */

  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail} onChange={handleFormData}>
      <div id="inputs">
        <div className="input-field">
          <label
            htmlFor="form-input-name"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "Nombre:" : "Name:"}
          </label>
          <input
            className="form_input"
            type="text"
            id="form-input-name"
            minLength={0}
            maxLength={30}
            required
            placeholder={
              spanishLanguage ? "Tu nombre va acá..." : "Your name goes here..."
            }
            name="input_name"
          />
          <label
            htmlFor="form-input-email"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "Correo:" : "Email:"}
          </label>
          <input
            className="form_input"
            type="text"
            id="form-input-email"
            minLength={0}
            maxLength={30}
            required
            placeholder={
              spanishLanguage ? "ejemplo@ejemplo.com" : "example@example.com"
            }
            name="input_email"
          />
        </div>
        <div className="input-field">
          <label
            htmlFor="form-input-message"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "¡Enviame un mensaje!" : "Send me a message!"}
          </label>
          <textarea
            className="form_input"
            id="form-input-message"
            rows="10"
            minLength={0}
            maxLength={400}
            required
            placeholder={
              spanishLanguage
                ? "Acá podés escribir tu mensaje..."
                : "Here you can write your message..."
            }
            name="input_message"
          />
        </div>
      </div>
      <button id="send-button" type="submit" value="send">
        {spanishLanguage ? "¡Enviar!" : "Send!"}
      </button>
    </form>
  );
};

export default ContactForm;
