import React from "react";

export default function TodoItem(props) {
  const { title } = props.todo;
  return (
    <div class="item">
      <span>{title}</span>
    </div>
  );
}
