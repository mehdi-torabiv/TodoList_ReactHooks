import React, { useState } from 'react';
import Todo from "./Components/Todo";
import "./App.css";
import TodoForm from './Components/TodoForm';
function App() {
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

  return (
    <div className="app">
      <div className="TodoList">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
