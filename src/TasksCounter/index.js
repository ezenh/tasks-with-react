import React from "react";
import { TasksContext } from "../TasksContext";

import './TasksCounter.css'

function TasksCounter() {
      const {
        allTasks,
        loading,
        completedTasks,
      } = React.useContext(TasksContext)
  
  let taskCounterText = ""
  if (allTasks === completedTasks && allTasks !== 0) {
    console.log(allTasks)

    taskCounterText = `Felicidades, has completado todas las tareas!`
  } else {
    taskCounterText = `Has Completado ${completedTasks} de ${allTasks}`
  }
  if (loading) {
    return (
      <>
        <div className='TasksTitleLoading'>
        </div>
        <div className='TasksCounterLoading'>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1 className='TasksTitle'>Tus tareas</h1>
        <h4 className='TasksCounter'>{taskCounterText}</h4>
      </>

    );
  }
}

export { TasksCounter }