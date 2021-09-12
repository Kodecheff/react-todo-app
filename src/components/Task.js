import React from 'react'

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
        className="task container-fluid d-flex justify-content-between"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
        {task.title}
        <div>
          <button onClick={() => completeTask(index)}>Complete</button>
          <button style={{ background: "red", padding: "4px 9px", borderRadius: "20px" }}
           onClick={() => removeTask(index)}>x</button>
        </div>
    </div>
  );
}

export default Task
