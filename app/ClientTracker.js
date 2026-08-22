"use client";

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

export default function ClientTracker() {
  useEffect(() => {
    loadScript(function () {
      if (window.beTracker) {
        window.beTracker.t({ hash: "6e72d75ae0c630f71423e187233e2cc7" });
      }
    });
  }, []);

  return null;
}
