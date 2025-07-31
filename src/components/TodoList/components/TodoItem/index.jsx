import React from "react";

const TodoItem = ({ todo, onCompleted }) => (
  <div key={todo.id}>
    <i>{todo.name}</i> - <input
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => onCompleted({
              ...todo,
              completed: e.target.checked
          }
      )}
  />
  </div>
);

export default TodoItem;
