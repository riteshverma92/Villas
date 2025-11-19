import React from "react";
// import './TermsAndConditions.css'
const TermsAndConditions = () => {
  return (
    <section id="termsandcond">
      <header>
        <p>CURRENT AS OF Nov 2025</p>
        <h1>Terms & Conditions</h1>
      </header>
      <div className="content">
        <p>
          Welcome to LUXURY RENTAL. These Terms govern your access and use of
          our platform, services, and villa listings.
        </p>

        <p>
          By accessing or using our Website, you accept and agree to these
          Terms. If you do not agree, please stop using the Website
          immediately.
        </p>

        <ul>
          <li>
            <h5>Acceptance of Terms</h5>
            <p>
              By using our Website, you acknowledge that you have read and
              understood these Terms. LUXURY RENTAL reserves the right to update
              or modify these Terms at any time. Continued use of the Website
              after changes signifies your acceptance of the updated Terms.
            </p>
          </li>

          <li>
            <h5>Use of the Website</h5>
            <ol>
              <li>You must be at least 18 years old to access our services.</li>
              <li>
                You agree to use the Website only for lawful purposes and in
                accordance with all applicable regulations.
              </li>
              <li>
                You are responsible for keeping your account information secure.
                LUXURY RENTAL is not liable for any damages resulting from failed
                account security.
              </li>
            </ol>
          </li>

          <li>
            <h5>Privacy Policy</h5>
            <p>
              Your use of our Website is also governed by our Privacy Policy,
              which explains how we collect, use, and protect your personal
              information.
            </p>
          </li>

          <li>
            <h5>Intellectual Property</h5>
            <ol>
              <li>
                All content on this Website—including images, text, logos, villa
                descriptions, and design elements—is owned by LUXURY RENTAL and
                protected by intellectual property laws.
              </li>
              <li>
                You may not copy, distribute, modify, or reproduce any content
                without our written permission.
              </li>
            </ol>
          </li>

          <li>
            <h5>Limitation of Liability</h5>
            <p>
              LUXURY RENTAL is not responsible for any direct or indirect
              damages arising from your use of the Website, including but not
              limited to service interruptions, technical issues, unauthorized
              access, or third-party actions.
            </p>
          </li>

          <li>
            <h5>Governing Law</h5>
            <p>
              These Terms are governed by the laws of India. For any questions
              or concerns regarding these Terms, please contact us at{" "}
              <span>luxuryvilla@gmail.com</span>.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TermsAndConditions;
