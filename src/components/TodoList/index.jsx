import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/index.jsx";

const TODO_LIST = [
  {
    id: 1,
    name: "Создать TODO лист",
    completed: false,
  },
  {
    id: 2,
    name: "Получение списка постов",
    completed: false,
  },
  {
    id: 3,
    name: "Вывод постов на страницу",
    completed: false,
  },
  {
    id: 4,
    name: "Создание поста",
    completed: false,
  },
  {
    id: 5,
    name: "Удаление поста",
    completed: false,
  },
  {
    id: 6,
    name: "Редактирование поста",
    completed: false,
  },
  {
    id: 7,
    name: "Изменение поста",
    completed: false,
  },
  {
    id: 8,
    name: "Детальная страница поста",
    completed: false,
  },
  {
    id: 9,
    name: "Комментарии к посту на детальной странице",
    completed: false,
  },
  {
    id: 10,
    name: "Пагинация постов",
    completed: false,
  },
  {
    id: 11,
    name: "Фильтрация по userId",
    completed: false,
  },
];
const TODOS_KEY = "todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    setTodos(savedTodos || TODO_LIST);
    console.log(localStorage);
  }, []);
  return (
    <>
      <h2>Todo list</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
