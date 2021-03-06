import React, { useState, useEffect } from 'react';
import Task from './components/Task'
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
      {
          title: "Study GraphQL",
          completed: true
      },
      {
          title: "Visit the gym",
          completed: true
      },
      {
          title: "Read on Web3.0",
          completed: false
      },
      {
        title: "Play FIFA with buddies",
        completed: true
    }
  ]);
    
  useEffect(() => { 
    setTasksRemaining(tasks.filter(task => !task.completed).length) 
  });

  const addTask = title => {
      const newTasks = [...tasks, { title, completed: false }];
      setTasks(newTasks);
  };
  
  const completeTask = index => {
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
  };
  
  const removeTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
  };

  return (
      <div className="todo-container">
          <div className="header">Task remaining: {tasksRemaining}</div>
          <div className="tasks">
              {tasks.map((task, index) => (
                  <Task
                  task={task}
                  index={index}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  key={index}
                  />
              ))}
          </div>
          <div className="create-task" >
              <CreateTask addTask={addTask} />
          </div>
      </div>
  );
}
export default App;