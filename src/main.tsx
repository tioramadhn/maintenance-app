import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.css";
import MaxWidthWrapper from "./components/MaxWidthWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MaxWidthWrapper>
      <App />
    </MaxWidthWrapper>
  </React.StrictMode>
);
