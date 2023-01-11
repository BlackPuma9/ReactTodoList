import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([
    {
      name: 'buy',
      isComplited: false
    },
    {
      name: 'bread',
      isComplited: false
    }
  ])

  const eventEnterHandler = (event) => {
    setValue(event.target.value)
  }

  const eventHadler = () => { 
    if (value.length !== 0) {
      setTasks([...tasks, { name: value, isComplited: false }])
      setValue('')
    }
  }

  return (
      <div>
        <h1>ToDoList</h1>
        <input 
          type="text" 
          value={value}
          placeholder="Enter your task"
          onChange={eventEnterHandler}
          />
          <button onClick={eventHadler}>Submit</button>
        <h3>Task list</h3> 
          <ol>
            {tasks.map((task, index) => <li key={index}>{task.name}</li>)}
          </ol>
      </div>
    );
}

export default App;
