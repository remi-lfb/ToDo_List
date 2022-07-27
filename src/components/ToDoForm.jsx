import React, {useState} from "react";

// Retrieves the ToDoList and its setter from the ToDoList component
export default function ToDoForm({toDoList, setToDoList}) {
    // Defines a new blank array for the user input data
    const [userInput, setUserInput] = useState("");

    // Insert the user input data in the array
    const handleChange = (evt) => {
        setUserInput(evt.currentTarget.value);
    }

    // Intercepts and stops the sending of the form to insert the task
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    // Adds the task to the ToDoList
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
