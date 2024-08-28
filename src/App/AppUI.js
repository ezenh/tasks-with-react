import React from "react";
import { CreateTaskButton } from "../CreateTaskButton"
import { TasksCounter } from "../TasksCounter"
import { TasksSearch } from "../TasksSearch"
import { TasksList } from "../TasksList"
import { Modal } from "../Modal"

import { TasksContext } from "../TasksContext";

function AppUI() {  
    const { openModal } = React.useContext(TasksContext)
    return (
        <>
            <section className='task-creator'>
                <h2>Crear nueva tarea</h2>
                <input className="newTask-input" placeholder="Nombre de la tarea" />

                <CreateTaskButton />

                {openModal && (
                    <Modal />
                )}
            </section>

            <section className='task-viewer'>
                <TasksCounter />
                <TasksSearch />
                <TasksList />
            </section>
        </>
    )
}

export { AppUI }