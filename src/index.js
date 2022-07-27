// React's modules
import React from "react";
import {createRoot} from "react-dom/client";

// Components
import App from "./components/App";

// Defines the root element
const container = document.body;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
