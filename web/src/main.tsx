import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function getOrCreateVisitorId(): string {
  const key = 'novus_visitor_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
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
