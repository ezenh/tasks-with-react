import React from "react";
import { TasksContext } from "../TasksContext";
import "./TasksSearch.css";

function TasksSearch() {
  const { searchValue, setSearchValue, loading } = React.useContext(TasksContext)

  if (loading) {
    return (
      <>
        <div className="TasksSearchLoading"/>
      </>

    )
  } else {
    return (
      <>
        <input className="TasksSearch"
          placeholder="Buscar..."
          value={searchValue}
          onChange={(event) => {
            let searchInput = (event.target.value)
            setSearchValue(searchInput);
          }} />
      </>

    )
  }
}

export { TasksSearch }