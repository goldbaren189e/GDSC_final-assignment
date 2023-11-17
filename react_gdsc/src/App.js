import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  
  const deleteTask = function () {
    setTasks([]);
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
  <div className="container">
    <div className="App">
      <h1>정해인의 Todo List</h1>
      <div className="what">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Write your text"/>
        <button onClick={addTask} >Add Task</button>
      </div>
      
      <ul> 
        {tasks.map((t, index) => (
          <li key={index+1}>
            {index+1}. {t}
          </li>
        ))}
      </ul>

      <button onClick={deleteTask}>Delete All</button>
    </div>
  </div>

  );
}



export default App;