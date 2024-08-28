import React from 'react';

import "./TasksItem.css"
import "./TasksItemLoading"

function TasksItem({ text, completed, onComplete, onDelete }) {
    return (
      <li className={`TodoItem ${completed && "TodoItem--completed"}`}>
        <span className={`Icon Icon-check ${completed && "Icon-check--completed"}`}
        onClick={ onComplete }><img src="../public/check.png" alt="check icon"></img></span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>{text}</p>
        <img className={`Icon Icon-delete`} src="../public/x.png" alt="delete" onClick={ onDelete }></img>
      </li>
    );
  }

export { TasksItem }