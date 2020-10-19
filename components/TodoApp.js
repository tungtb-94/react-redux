import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import axios from "axios";
export default function TodoApp() {
  const [state, setState] = useState({
    // Using Hook
    todos: []
  });

  useEffect(() => {
    const config = {
      params: {
        _limit: 10
      }
    };
    // Create request get Todo List
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => setState({ todos: response.data }));
  });
  return (
    <div className="Todo-app">
      <div className="todo-item">
        <Todos todos={state.todos} />
      </div>
    </div>
  );
}
