import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../reducers/todos";
import Todo from "./EditTodo";
import { title } from '../lang/index'

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTodos(data));
      });
  }, [dispatch]);


  useEffect(() => {
    window.localStorage.setItem(
      'todoList',
      JSON.stringify([
        {
          ...todos,
        },
      ])
    );
  }, [todos])

  return (
    <div>
      <h2 className="blockTitle">{title}</h2>
      <ul className="listItems">
        {todos && todos.length > 0 && todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
