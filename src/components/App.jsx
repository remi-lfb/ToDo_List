// React's modules
import React from "react";

// Components
import Header from "./Header";
import ToDoList from "./ToDoList";

// Stylesheet
import "../../public/css/styles.css";

export default function App() {
    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    );
}
