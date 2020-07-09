import React from "react";
import ReactDOM from "react-dom";
import {FlipProvider} from "react-easy-flip";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./tailwind.output.css";

ReactDOM.render(
  <React.StrictMode>
    <FlipProvider>
      <App />
    </FlipProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
