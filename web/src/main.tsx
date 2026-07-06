import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Assign a stable visitor ID so Pendo records identified visitors.
// For this demo app (no auth), we persist a UUID in localStorage so the
// same browser session maps to the same visitor across page loads.
function getOrCreateVisitorId(): string {
  const key = "qawolf_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

pendo.initialize({
  visitor: {
    id: getOrCreateVisitorId()
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
