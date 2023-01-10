import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('')

  return (
    <div>
      <h1>ToDoList</h1>
      <input 
        type="text" 
        value={value}
        placeholder="Enter your task"
        onChange={event => setValue(event.target.value)}
        />
        <button>Submit</button>
    </div>
  );
}

export default App;
