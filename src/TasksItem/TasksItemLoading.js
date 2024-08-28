import React from "react";
import "./TasksItemLoading.css";

function TasksItemLoading() {
    let itemsArray = document.getElementsByClassName('loading-task-container')
    setTimeout(() => {
        let count = 0

        setInterval(() => {
            if (count < itemsArray.length) {
                itemsArray[count].style.transform = "scale(1)"
                count ++
                // console.log(count)
            }
        }, 100);
    }, 100)
    
    return (
        <>
        {/* <p> Cargando tareas...</p> */}
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
        </div>
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
        </div>
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
        </div>
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
            </div>
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
        </div>
        <div className="loading-task-container">
            <div className="loading-task-check"></div>
            <div className="loading-task-text"></div>
        </div>
        </>

    )
}

export { TasksItemLoading }