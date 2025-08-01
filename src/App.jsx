import "./App.css";
import TodoList from "./components/TodoList/index.jsx";
import Posts from "./components/Posts/index.jsx";

function App() {
  return (
    <>
      <h1 className="title">Посты</h1>
      <div className="wrapper">
        <TodoList />
        <Posts />
      </div>
    </>
  );
}

export default App;
