const Contact = () => {
  return (
    <section className="contact reveal" id="contact">
      <h2 className="section-title reveal">Contact</h2>
      <p className="section-subtitle reveal">
        Have a project in mind? Let’s work together.
      </p>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info reveal reveal-left">
          <h3>Let’s build something great 🚀</h3>

          <p>
            I’m open to freelance work, internships, and full-stack development
            opportunities. Feel free to reach out.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> muthurajaperiyasamy10@gmail.com
            </p>
            <p>
              <strong>Location:</strong> India, Tamil Nadu
            </p>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/918489387739?text=Hi%20Muthuraja,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM (NETLIFY FORM) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form reveal reveal-right"
        >
          {/* REQUIRED hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
