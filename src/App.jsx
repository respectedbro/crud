import TodoList from "./components/TodoList/index.jsx";
import Posts from "./components/Posts/index.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Посты</h1>
      <div className="wrapper">
        <TodoList />
        <div className="content">
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;
