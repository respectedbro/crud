import React from "react";

const TodoItem = ({ todo }) => (
  <div key={todo.id}>
    <i>{todo.name}</i> - <input type="checkbox" checked={todo.completed} />
  </div>
);

export default TodoItem;
