import "../../css/contactForm.css";

const ContactForm = () => {
  return (
    <form id="contact-form" action="#" method="POST">
      <div id="inputs">
        <div className="input-field">
          <label htmlFor="form-input-name">Name:</label>
          <input
            type="text"
            id="form-input-name"
            placeholder="Your name goes here..."
          />
          <label htmlFor="form-input-email">Email:</label>
          <input type="text" id="form-input-email" placeholder="Name..." />
        </div>
        <div className="input-field">
          <label htmlFor="form-input-message">Send me a message!</label>
          <textarea
            name="subject-message"
            id="form-input-message"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button id="send-button" type="submit">
        Send!
      </button>
    </form>
  );
};

export default ContactForm;
