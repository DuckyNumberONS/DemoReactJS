import React, { useState } from "react";
import AddTask from "./AddTask";
import Todo from "./Todo";

export default function CaughtUp() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      alert("Vui lòng nhập lại thông tin !");
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    console.log(
      "🚀 ~ file: CaughtUp.js ~ line 19 ~ CaughtUp ~ removedArr",
      removedArr
    );

    setTodos(removedArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <React.StrictMode>
      <AddTask onSubmit={addTodo} />
      <div className="mx-4 my-6 h-96 overflow-auto">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
        <p
          className="my-16 text-lg text-center text-gray-500"
          data-testid="empty-todos-message"
        >
          You're all caught up!
        </p>
      </div>
    </React.StrictMode>
  );
}
