import React, { useState } from 'react';
import Todo from "./Components/Todo";
import "./App.css";
import TodoForm from './Components/TodoForm';
function App(props) {
  const [todos, setTodos] = useState([
    {
      text: "Complete my homework",
      isCompleted: false
    },
    {
      text: "Doing exercise",
      isCompleted: false
    },
    {
      text: "Eat breakfast in tommorow morning!",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const CompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="TodoList">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} CompleteTodo={CompleteTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
