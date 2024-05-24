import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import "../css/contactFormPage.css";
import { Alert } from "@mui/material";

const Contact = ({ darkMode, spanishLanguage }) => {

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    if (submissionStatus === "success") {
      // Clear input fields after successful submission
      form.current.reset();

      const timeout = setTimeout(() => {
        setSubmissionStatus(null);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [submissionStatus]);

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
          setSubmissionStatus('success');
          // console.log('SUCCESS!', res.status, res.text);
        },
        (error) => {
          setSubmissionStatus('error');
          // console.error('Error sending email:', error);
        }
      )
      .catch(error => {
        setSubmissionStatus('error');
        // console.error('Error sending email:', error);
      });
      
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
        <div>
          {submissionStatus === 'success' && (
            <Alert variant="filled" severity="success">
              {spanishLanguage ? "¡Mensaje enviado exitosamente!" : "Message sent successfully!"}
            </Alert>
          )}
          {submissionStatus === 'error' && (
            <Alert variant="filled" severity="error">
              {spanishLanguage ? "¡Hubo un error al enviar el mensaje!" : "There was an error sending the message!"}
            </Alert>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
