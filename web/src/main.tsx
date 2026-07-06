import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function getOrCreateVisitorId(): string {
  const key = "pendo_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem(key, id);
  }
  return id;
}

pendo.initialize({
  visitor: {
    id: getOrCreateVisitorId(),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
