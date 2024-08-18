import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mdx from "./mdx.mdx";
import Tsx from "./tsx.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mdx />
    <Tsx />
  </StrictMode>
);
