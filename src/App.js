import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([
    {
      name: 'buy',
      isComplited: false,
      tags: ['#shopping']
    },
    {
      name: 'bread',
      isComplited: true,
      tags: ['#hobby']
    }
  ])
  // const [tags, setTags] = useState(['#shopping', '#hobby', '#work'])
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const eventEnterHandler = (event) => {
    setValue(event.target.value)
  }

  const eventHadler = () => { 
    if (value.length !== 0) {
      const tags = []
      if (checkedOne) {
        tags.push('#shopping')
      }

      if (checkedTwo) {
        tags.push('#work')
      }

      if (checkedThree) {
        tags.push('#hobby')
      }

      setTasks([...tasks, { name: value, isComplited: false, tags }])
      setValue('')
      setCheckedOne(false)
      setCheckedTwo(false)
      setCheckedThree(false)
      
    }
  }

  const handleToggle = (index) => {
    tasks[index].isComplited = !tasks[index].isComplited
    setTasks([...tasks])
  }

  return (
      <div>
        <h1>ToDoList</h1>
        <input 
          type="text" 
          value={value}
          placeholder="Enter your task"
          onChange={eventEnterHandler}
          /><br/>
          <label>
            <input type="checkbox" 
            checked={checkedOne}
            onChange={() => setCheckedOne(!checkedOne)}
            />
            #shopping
          </label>
          <label>
            <input type="checkbox" 
            checked={checkedTwo}
            onChange={() => setCheckedTwo(!checkedTwo)}
            />
            #work
          </label>
          <label>
            <input type="checkbox" 
            checked={checkedThree}
            onChange={() => setCheckedThree(!checkedThree)}
            />
            #hobby
          </label><br/>
          <button onClick={eventHadler}>Submit</button>
        <h3>Task list</h3> 
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
