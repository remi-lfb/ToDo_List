import React, {useState} from "react";

// Components
import data from "../fixtures/data.json";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
    // Defines a new array by filling it with the data.json file
    const [toDoList, setToDoList] = useState(data);

    // Toggle task completion to true/false
    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? {...task, complete: !task.complete} : {...task};
        });

        setToDoList(mapped);
    }

    // Deletes completed tasks
    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });

        setToDoList(filtered);
    }

    return (
        <div className="ToDoList">
            {toDoList.map(todo => {
                return (
                    <div className={todo.complete ? "strike" : ""} onClick={() => handleToggle(todo.id)}>
                        <a>{todo.task}</a>
                    </div>
                );
            })}
            <button style={{margin: 20}} onClick={handleFilter}>Effacer les tâches complétées</button>
            <!-- Send the ToDoList and its setter to the ToDoForm component -->
            <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
        </div>
    );
}
