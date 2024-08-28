import React from 'react'
import { TasksContext } from '../TasksContext'
import { TasksItemLoading } from '../TasksItem/TasksItemLoading'
import { TasksItemError } from '../TasksItem/TasksItemError'
import { TasksEmpty } from '../TasksEmpty'
import { TasksItem } from '../TasksItem'
import './taskList.css'


function TasksList() {
  const { loading, error, findedTasks, completeTask, deleteTask } = React.useContext(TasksContext)
  let children
  if (loading) {
    children = <TasksItemLoading />
  }
  else if (error) {
    children = <TasksItemError />
  }
  else if (!loading && findedTasks.length === 0) {
    children = <TasksEmpty />
  }
  else {
    children = findedTasks.map(task => (
      <TasksItem text={task.text} completed={task.completed} key={task.text} onComplete={() => completeTask(task.text)} onDelete={() => deleteTask(task.text)} />
    ))
  }
  
  return (
      <ul className="tasksList">
        {children}
      </ul>
    )
  }

export { TasksList }