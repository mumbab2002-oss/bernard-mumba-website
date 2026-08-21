import { useEffect } from "react";

function loadScript(callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://tracker.metricool.com/resources/be.js";
  script.onload = callback;
  script.onerror = function () {
    console.error("Failed to load Metricool tracker script");
  };
  document.getElementsByTagName("head")[0].appendChild(script);
}

export default function Contact() {
  useEffect(() => {
    loadScript(function () {
      window.beTracker.t({ hash: "6e72d75ae0c630f71423e187233e2cc7" });
    });
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: mumbab2002@gmail.com</p>
      <p>Location: Ndola, Zambia</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/bernard-mumba-02372b333">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/bernardbwalyamumba">Instagram</a></li>
        <li><a href="https://www.youtube.com/@structuralbbmumba">YouTube</a></li>
        <li><a href="https://www.facebook.com/share/1C32NACPan/">Facebook</a></li>
        <li><a href="https://www.threads.com/@bernardbwalyamumba">Threads</a></li>
        <li><a href="https://wa.me/message/L4UVQ3PS2LMWN1">WhatsApp</a></li>
      </ul>
    </div>
  );
}