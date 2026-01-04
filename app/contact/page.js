export default function Contact() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1>Contact Mumba Consulntants</h1>

      {/* Contact Info */}
      <p>📍 Ndola, Zambia</p>
      <p>📧 Email: mumbab2002@gmail.com</p>

      <p>
        💬 WhatsApp:{" "}
        <a
          href="https://wa.me/message/L4UVQ3PS2LMWN1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </p>

      <hr />

      {/* Google Maps Section */}
      <h2>Our Office Location</h2>

      <iframe
        src="https://www.google.com/maps?q=Ndola,Zambia&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <hr />

      {/* Contact Form */}
      <h2>Send Us a Message</h2>

      <form
        action="https://formsubmit.co/mumbab2002@gmail.com"
        method="POST"
      >
        {/* Hidden FormSubmit settings */}
        <input type="hidden" name="_subject" value="New Inquiry - Mumba Consulntants" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          style={{ width: "100%", padding: "10px" }}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          style={{ width: "100%", padding: "10px" }}
        />
        <br /><br />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{ width: "100%", padding: "10px" }}
        ></textarea>
        <br /><br />

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            background: "#0a3d62",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
