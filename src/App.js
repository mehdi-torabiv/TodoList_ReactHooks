import React, { useState } from 'react';

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
  return (
    <div>

    </div>
  );
}

export default App;
