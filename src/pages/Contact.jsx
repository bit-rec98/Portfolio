import "../css/contactFormPage.css";

const Contact = ({ darkMode, spanishLanguage }) => {
  return (
    <section id="contact-section" className={darkMode ? "darkMode" : ""}>
      <h1>
        {spanishLanguage
          ? "¡Completá el formulario para poder contactarte!"
          : "Fill in the form and I will contact you!"}
      </h1>
      <form id="form-field" action="#" method="POST">
        <div id="form-fields">
          <div className="form-input">
            <label htmlFor="form-input-name">{spanishLanguage ? "Nombre:" : "Name:"}</label>
            <input
              type="text"
              id="form-input-name"
              minLength={0}
              maxLength={30}
              required
              placeholder={spanishLanguage ? "Tu nombre..." : "Your name..."}
            />
            <label htmlFor="form-input-email">{spanishLanguage ? "Correo:" : "Email:"}</label>
            <input
              type="text"
              id="form-input-email"
              minLength={0}
              maxLength={30}
              required
              placeholder={spanishLanguage ? "Tu correo..." : "Your email..."}
            />
          </div>
          <div className="form-input">
            <label htmlFor="form-input-message">{spanishLanguage ? "¡Enviame un mensaje!:" : "Send me a message!"}</label>
            <textarea
              name="subject-message"
              id="form-input-message"
              rows="10"
              minLength={0}
              maxLength={400}
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
