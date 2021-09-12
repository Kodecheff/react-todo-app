import React, { useState } from 'react'

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      
      addTask(value);
      setValue("");
  }
  
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              className="input form-control"
              value={value}
              placeholder="Add a new task"
              onChange={e => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
      </form>
  );
}

export default CreateTask
