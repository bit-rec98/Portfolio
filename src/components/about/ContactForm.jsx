import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../css/contactForm.css";

const ContactForm = ({ darkMode, spanishLanguage }) => {

  const form = useRef();

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_PORT_PK,
    })
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'portfolio_form', form.current)
      .then(
        (res) => {
          console.log('SUCCESS!', res.status, res.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form id="about_form" ref={form} onSubmit={sendEmail}>
      <div id="inputs">
        <div className="input-field">
          <label
            htmlFor="about_input--name"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "Nombre:" : "Name:"}
          </label>
          <input
            className="about_form-input"
            type="text"
            id="about_input--name"
            minLength={0}
            maxLength={30}
            required
            placeholder={
              spanishLanguage ? "Tu nombre va acá..." : "Your name goes here..."
            }
            name="from_name"
          />
          <label
            htmlFor="about_input--email"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "Correo:" : "Email:"}
          </label>
          <input
            className="about_form-input"
            type="text"
            id="about_input--email"
            minLength={0}
            maxLength={30}
            required
            placeholder={
              spanishLanguage ? "ejemplo@ejemplo.com" : "example@example.com"
            }
            name="from_email"
          />
        </div>
        <div className="input-field">
          <label
            htmlFor="about_input--message"
            className={darkMode ? "darkMode" : ""}
          >
            {spanishLanguage ? "¡Enviame un mensaje!" : "Send me a message!"}
          </label>
          <textarea
            className="about_form-input"
            id="about_input--message"
            rows="10"
            minLength={0}
            maxLength={400}
            required
            placeholder={
              spanishLanguage
                ? "Acá podés escribir tu mensaje..."
                : "Here you can write your message..."
            }
            name="from_message"
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
