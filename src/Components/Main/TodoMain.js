import React, { useState, useCallback, memo } from "react";
import AddTask from "./AddTask";
import Todo from "./Todo";

const TodoMain = ()=>{
  const [todos, setTodo] = useState([]);

  const addTodo = useCallback(
    (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        alert("Vui lòng nhập lại thông tin !");
        return;
      }
      const newTodos = [todo, ...todos];
      setTodo(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (id) => {
      const removedArr = [...todos].filter((todo) => todo.id !== id);
      // (-)task
      setTodo(removedArr);
    },
    [todos]
  );

  const completeTodo = useCallback(
    (id) => {
      if (id) {
        let updatedTodo = todos.length > 0 && todos.map((todo) => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodo(updatedTodo);
      }
    },
    [todos]
  );

  return (
    <>
      <AddTask onSubmit={addTodo} />
      <div className="mx-4 my-6 h-96 overflow-auto">
        {todos.length > 0 &&
          todos.length > 0 && todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        {todos.length === 0 && (
          <p className="my-16 text-lg text-center text-gray-500">
            You're all caught up!
          </p>
        )}
      </div>
      <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1"> {todos.length} task </p>
        <p className="flex-1 order-2 text-center">
          {todos.filter((todo) => todo.isComplete).length} complete
        </p>
        <p className="flex-1 order-last text-right">
          {todos.filter((todo) => !todo.isComplete).length} open
        </p>
      </div>
    </>
  );
}
export default memo(TodoMain)