import "../css/usageTerms.css";

const UsageTerms = ({darkMode, spanishLanguage}) => {
  return (
    <section>
      <article className={darkMode ? "darkMode" : ""}>
        <h1>Terms and Conditions</h1>
        <ul>
          <li>
            <h2>Acceptance of Terms: </h2>
            <p>
              By accessing and using [Your Name]'s fullstack web ("Portfolio"),
              you agree to comply with and be bound by these terms and
              conditions.
            </p>
          </li>
          <li>
            <h2>Intellectual Property</h2>
            <p>
              All content and materials on the Portfolio, including but not
              limited to text, graphics, logos, images, and code, are the
              intellectual property of [Your Name] and are protected by
              copyright and other intellectual property laws.
            </p>
          </li>
          <li>
            <h2>Use of Portfolio</h2>
            <p>
              You may use the Portfolio for personal and non-commercial purposes
              only. You are not allowed to reproduce, distribute, modify, or
              create derivative works based on any content from the Portfolio
              without the express consent of [Your Name].
            </p>
          </li>
          <li>
            <h2>Accuracy of Information</h2>
            <p>
              [Your Name] strives to provide accurate and up-to-date information
              on the Portfolio. However, we make no warranties or
              representations regarding the accuracy or completeness of the
              information. You acknowledge that the information may contain
              inaccuracies or errors and [Your Name] is not liable for any such
              inaccuracies or errors.
            </p>
          </li>
          <li>
            <h2>Third-Party Links</h2>
            <p>
              The Portfolio may contain links to third-party websites or
              services that are not owned or controlled by [Your Name]. [Your
              Name] is not responsible for the content or privacy practices of
              these third-party sites. We encourage you to review the terms and
              privacy policies of any third-party websites you visit.
            </p>
          </li>
          <li>
            <h2>Security</h2>
            <p>
              While [Your Name] takes reasonable measures to protect the
              security of the Portfolio, we cannot guarantee the security of any
              information you transmit. You acknowledge and agree that you use
              the Portfolio at your own risk.
            </p>
          </li>
          <li>
            <h2>Limitation of Liability</h2>
            <p>
              To the extent permitted by law, [Your Name] shall not be liable
              for any direct, indirect, incidental, consequential, or punitive
              damages arising out of your access to or use of the Portfolio.
            </p>
          </li>
          <li>
            <h2>Changes to Terms</h2>
            <p>
              [Your Name] reserves the right to update or modify these terms and
              conditions at any time without prior notice. Your continued use of
              the Portfolio after any changes indicates your acceptance of the
              modified terms.
            </p>
          </li>
          <li>
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Country/State].
            </p>
          </li>
          <li>
            <h2>Contact Information</h2>
            <p>
              If you have any questions or concerns about these terms and
              conditions, please contact [Your Contact Information].
            </p>
          </li>
          <li>
            <p>
              By using [Your Name]'s fullstack web portfolio, you agree to abide
              by these terms and conditions.
            </p>
          </li>
          <li>
            <p><strong>Last updated: [Date]</strong></p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default UsageTerms;
