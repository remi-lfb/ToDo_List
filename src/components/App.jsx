import React from "react";

import Header from "./Header";
import ToDoList from "./ToDoList";

import "../../public/css/styles.css";

export default function App() {
    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    );
}
