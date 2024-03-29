import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
