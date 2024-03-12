import "../css/contactFormPage.css";

const Contact = ({darkMode, spanishLanguage}) => {
  return (
    <section id="contact-section" className={darkMode ? "darkMode" : ""}>
      <h1>Fill in the form and I will contact you!</h1>
      <form id="form-field" action="#" method="POST">
        <div id="form-fields">
          <div className="form-input">
            <label htmlFor="form-input-name">Name:</label>
            <input
              type="text"
              id="form-input-name"
              placeholder="Your name..."
            />
            <label htmlFor="form-input-email">Email:</label>
            <input type="text" id="form-input-email" placeholder="Your email..." />
          </div>
          <div className="form-input">
            <label htmlFor="form-input-message">Send me a message!</label>
            <textarea
              name="subject-message"
              id="form-input-message"
              rows="10"
              placeholder="You can leave me a message..."
            ></textarea>
          </div>
        </div>
        <button id="form-send-button" type="submit">
          Send!
        </button>
      </form>
    </section>
  );
};

export default Contact;
