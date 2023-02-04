import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      { task: "Learn React", completed: false },
      { task: "Learn Hooks", completed: false },
      { task: "Build a To-Do List app", completed: false },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(e.target.elements.task.value);
          e.target.elements.task.value = "";
        }}
      >
        <input
          className="border border-gray-400 rounded p-2"
          type="text"
          name="task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded p-2 ml-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul className="mt-4">
        {tasks.map((task, i) => (
          <li key={i} className="font-medium py-2">
            <span
              onClick={() => toggleTask(i)}
              className="cursor-pointer"
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.task}
            </span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white rounded p-2 ml-2"
              onClick={() => deleteTask(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
