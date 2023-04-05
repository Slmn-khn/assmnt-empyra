import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "../src/styles/styles.css";
import { mainTitle } from './lang/index'

const App = () => {
  return (
    <div className="container">
      <h2 className="pageTitle">{mainTitle}</h2>
      <div className="contentBlock">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
