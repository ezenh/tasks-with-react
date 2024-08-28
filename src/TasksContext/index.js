import React from "react";

import { useLocalStorage } from "./useLocalStorage";

const TasksContext = React.createContext();
    
function TasksProvider({ children }) {
    // localStorage.removeItem('tasks_v1')

    // export let defaultTasks = [
    //   { text: "Cortar cebolla", completed: true },
    //   { text: "Saltear el pollo", completed: false },
    //   { text: "Vertir la crema", completed: false },
    //   { text: "Incorporar las pastas", completed: false },
    //   { text: "Servir en fuente", completed: false },
    // ]

    // localStorage.setItem('tasks_v1', JSON.stringify(defaultTasks))
    
    const { items: tasks, saveItem: saveTask, loading, error } = useLocalStorage('tasks_v1', [])
    const [searchValue, setSearchValue] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false)

    const completedTasks = tasks.filter(task => !!task.completed).length
    const allTasks = tasks.length

    const findedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))

    const completeTask = (text) => {
        const selectedTask = [...tasks]
        const selectedTaskIndex = selectedTask.findIndex(task => task.text === text)
        // console.log(selectedTask)
        if( selectedTask[selectedTaskIndex].completed === true ) {
            selectedTask[selectedTaskIndex].completed = false
        }else{
            selectedTask[selectedTaskIndex].completed = true
        }
        saveTask(selectedTask)
        }

    const deleteTask = (text) => {
        const selectedTask = [...tasks]
        const selectedTaskIndex = selectedTask.findIndex(task => task.text === text)
        // console.log(selectedTask)
        selectedTask.splice(selectedTaskIndex, 1)
        saveTask(selectedTask)
        }

    const createTask = (text) => {
        const newTask = [...tasks]
        let searchCoincidence = newTask.filter(task => task.text.toLowerCase() === text.toLowerCase())
        if(text !== "") {
            if(searchCoincidence.length === 0) {
                newTask.push({text: text, completed: false})
                saveTask(newTask)
                setOpenModal(true)
                setTimeout(() => {
                    setOpenModal(false)

                },2000)
            }else{
                alert("Ya existe esta tarea")
                }
            }
    }
    
    return (
        <TasksContext.Provider value={{
            loading,
            error,
            completedTasks,
            allTasks,
            openModal,
            setOpenModal,
            searchValue,
            setSearchValue,
            findedTasks,
            completeTask,
            deleteTask,
            createTask,
            tasks,
            saveTask,
        }}>
            { children }
        </TasksContext.Provider>

    )
}

export { TasksContext, TasksProvider }