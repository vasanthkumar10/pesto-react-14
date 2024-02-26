import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const showTasks = () => {
    if (tasks.length) return tasks.map((task) => <h1>{task}</h1>);
    return <h1>No tasks to show</h1>;
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>add task</button>
      {tasks.length > 0 && <h1>Tasks List</h1>}
      {/* {tasks.length ? (
        tasks.map((task) => <h1>{task}</h1>)
      ) : (
        <h1>No tasks to show</h1>
      )} */}
      {showTasks()}
    </div>
  );
}

export default TaskManager;
