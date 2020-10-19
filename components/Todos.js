import React from "react";
import TodoItem from "./TodoItem";
export default function Todos(props) {
  const arrTodos = props.todos;
  return (
    <div className="todos">
      {arrTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
