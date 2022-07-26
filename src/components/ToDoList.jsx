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

    return (
        <div className="ToDoList">
            {toDoList.map(todo => {
                return (
                    <div className={todo.complete ? "strike" : ""} onClick={() => handleToggle(todo.id)}>
                        {todo.task}
                    </div>
                );
            })}
        </div>
    );
}