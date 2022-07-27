import React, {useState} from "react";

export default function ToDoForm({toDoList, setToDoList}) {
    const [userInput, setUserInput] = useState("");

    const handleChange = (evt) => {
        setUserInput(evt.currentTarget.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];

        setToDoList(copy);
    }

    return (
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} placeholder="Entrez une tâche..." />
            <button style={{marginLeft: 5}}>Ajouter la tâche</button>
        </form>
    );
}