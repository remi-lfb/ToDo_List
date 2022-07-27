import React, {useState} from "react";

import data from "../fixtures/data.json";

export default function ToDoList() {
    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? {...task, complete: !task.complete} : {...task};
        });

        setToDoList(mapped);
    }

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
        </div>
    );
}