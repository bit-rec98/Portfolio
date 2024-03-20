import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'
import "../css/contactFormPage.css";

const Contact = ({ darkMode, spanishLanguage }) => {

  const form = useRef();

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_PORT_PK,
    })
  }, []);

  const handleSendEmail = (e) => {
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
    <section id="contact-section" className={darkMode ? "darkMode" : ""}>
      <h1>
        {spanishLanguage
          ? "¡Completá el formulario para poder contactarte!"
          : "Fill in the form and I will contact you!"}
      </h1>
      <form id="form-field" ref={form} onSubmit={handleSendEmail}>
        <div id="form-fields">
          <div className="form-input">
            <label htmlFor="contact_input--name">{spanishLanguage ? "Nombre:" : "Name:"}</label>
            <input
              type="text"
              id="contact_input--name"
              name="from_name"
              minLength={0}
              maxLength={30}
              required
              placeholder={spanishLanguage ? "Tu nombre..." : "Your name..."}
            />
            <label htmlFor="contact_input--email">{spanishLanguage ? "Correo:" : "Email:"}</label>
            <input
              type="text"
              id="contact_input--email"
              name="from_email"
              minLength={0}
              maxLength={30}
              required
              placeholder={spanishLanguage ? "Tu correo..." : "Your email..."}
            />
          </div>
          <div className="form-input">
            <label htmlFor="contact_input--message">{spanishLanguage ? "¡Enviame un mensaje!:" : "Send me a message!"}</label>
            <textarea
              name="from_message"
              id="contact_input--message"
              rows="10"
              minLength={0}
              maxLength={500}
              required
              placeholder={
                spanishLanguage ? "Tu mensaje..." : "Your message..."
              }
            ></textarea>
          </div>
        </div>
        <button id="form-send-button" type="submit">
          {spanishLanguage ? "¡Enviar!" : "Send!"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
