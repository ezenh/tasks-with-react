import React from "react";
import { TasksContext } from "../TasksContext";

function CreateTaskButton() {
    const { createTask } = React.useContext(TasksContext)
    let onCreate = () => createTask(document.querySelector(".newTask-input").value)

    return (
        <button style={{
            width: "min-content",
            textWrap: "nowrap",
            border: "none",
            padding: "8px 12px",
            borderRadius: "8px",
            backgroundColor: "rgb(113 53 124)",
            color: "white",
            fontWeight: "400"
        }}
        onClick={ onCreate }
    >Crear tarea</button>
    )
}

export { CreateTaskButton }