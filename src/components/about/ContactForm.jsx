import "../../css/contactForm.css";

const ContactForm = ({darkMode, spanishLanguage}) => {
  return (
    <form id="contact-form">
      <div id="inputs">
        <div className="input-field">
          <label htmlFor="form-input-name" className={darkMode ? "darkMode" : ""}>Name:</label>
          <input
            type="text"
            id="form-input-name"
            placeholder="Your name goes here..."
          />
          <label htmlFor="form-input-email" className={darkMode ? "darkMode" : ""}>Email:</label>
          <input type="text" id="form-input-email" placeholder="example@email.com" />
        </div>
        <div className="input-field">
          <label htmlFor="form-input-message" className={darkMode ? "darkMode" : ""}>Send me a message!</label>
          <textarea
            name="subject-message"
            id="form-input-message"
            rows="10"
            placeholder="Feel free to leave me a message..."
          />
        </div>
      </div>
      <button id="send-button" type="submit">
        Send!
      </button>
    </form>
  );
};

export default ContactForm;
