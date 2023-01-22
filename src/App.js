import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const [isValidInput, setIsValidInput] = useState(true)
  const [tasks, setTasks] = useState([])
  const [tags, setTags] = useState([
    {
      name: 'shopping', 
      isAdded: false
    },
    {
      name: 'hobby', 
      isAdded: false
    },
    {
      name: 'work', 
      isAdded: false
    }
  ])

  const eventEnterHandler = (event) => {
    setValue(event.target.value)
    setIsValidInput(value.length !== 0)
  }

  const eventHadler = () => { 
    if (value.length !== 0) {
      const tagsChecked = tags.filter(tag => tag.isAdded)
      setTasks([...tasks, { name: value, isComplited: false, tags: tagsChecked.map(tag => tag.name) }])
      setValue('')
      const res = tags.map(tag => {
        tag.isAdded = false
        return tag
      })
      setTags(res)
      setIsValidInput(true)
    } else {
      setIsValidInput(false)
    }
  }

  const handleToggle = (index) => {
    tasks[index].isComplited = !tasks[index].isComplited
    setTasks([...tasks])
  }

  const handleCheckbox = (e, index) => {
    tags[index].isAdded = e.target.checked;
    setTags([...tags])
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
          <br/>
          {!isValidInput && <span style={{color: "red", border: '1px solid red'}}>
            Input cannot be empty
            </span>}
          <br/>
          {tags.map((tag, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  value={tag.name}
                  checked={tag.isAdded}
                  onChange={(e) => handleCheckbox(e, index)}
                />
                #{tag.name}
              </label>
            )
          })}
          <br/>
          <button onClick={eventHadler}>Submit</button>
        <h3>Task list</h3>
        {tasks.length === 0 && <p><b>No task added</b></p>}
          <ol>
            {tasks.map((task, index) => {
              const { name, isComplited, tags } = task
              
              return <li key={index}>
                  {isComplited ? <del>{name}</del> : name } 
                  <p>{tags.join(', ')}</p>
                  <button
                  onClick={() => handleToggle(index)}
                  >{isComplited ? 'Uncomplete' : 'Complete'}</button>
                  <button onClick={() => {
                    setTasks([...tasks.filter((task, i) => i !== index)])
                  }}>Remove</button>
                </li>
            })}
          </ol>
      </div>
    );
}

export default App;
