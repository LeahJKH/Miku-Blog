import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./css/index.css";
import App from "./routes/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
