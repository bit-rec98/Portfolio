import "../css/contactForm.css";

const Contact = () => {
  return (
    <form id="contact-form" action="#" method="POST">
      <div id="inputs">
        <div className="input-field">
          <label htmlFor="input-name">Name:</label>
          <input
            type="text"
            id="input-name"
            placeholder="Your name goes here..."
          />
          <label htmlFor="input-email">Email:</label>
          <input type="text" id="input-email" placeholder="Name..." />
        </div>
        <div className="input-field">
          <label htmlFor="input-message">Send me a message!</label>
          <textarea
            name="subject-message"
            id="input-message"
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

export default Contact;
