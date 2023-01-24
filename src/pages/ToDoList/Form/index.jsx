import React from 'react';

const Form = ({ value, eventEnterHandler, isValidInput, tags, handleCheckbox, eventHadler }) => {
    return (
        <div>
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
        </div>
    );
};

export default Form;