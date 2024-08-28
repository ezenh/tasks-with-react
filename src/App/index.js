import  React from "react";
import '../index.css';

import { AppUI } from "./AppUI.js";
import { TasksProvider } from "../TasksContext/index.js";




export function App() {
  return (
    <TasksProvider>
      < AppUI />
    </TasksProvider>
  );
}

export default App;
