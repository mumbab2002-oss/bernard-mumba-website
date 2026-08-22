export default function ThankYou() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully.</p>
      <p>We will contact you shortly.</p>
<input
  type="hidden"
  name="_next"
  value="https://mumbaconsultants.vercel.app/thank-you"
/>

      <a href="/" style={{ color: "#0a3d62" }}>
        ← Back to Home
      </a>
    </div>
  );
}
