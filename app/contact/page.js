export default function Contact() {
  return (
    <div>
      <h1>Contact Mumba Consulntants</h1>

      <p>📍 Ndola, Zambia</p>
      <p>📧 Email: mumbab2002@gmail.com</p>
      <p>
        💬 WhatsApp:{" "}
        <a href="https://wa.me/message/L4UVQ3PS2LMWN1" target="_blank">
          Chat on WhatsApp
        </a>
      </p>

      <h2>Office Location</h2>
      <iframe
        src="https://www.google.com/maps?q=Ndola,Zambia&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );

<h2>Send Us a Message</h2>

<form
  action="https://formsubmit.co/mumbab2002@gmail.com"
  method="POST"
>
  <input type="hidden" name="_subject" value="New Inquiry - Mumba Consulntants" />
  <input type="hidden" name="_captcha" value="false" />

  <input required name="name" placeholder="Your Name" />
  <br /><br />
  <input required name="email" placeholder="Your Email" />
  <br /><br />
  <textarea required name="message" placeholder="Your Message"></textarea>
  <br /><br />
  <button type="submit">Send Message</button>
</form>
}
