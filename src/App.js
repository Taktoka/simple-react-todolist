import TodoItem from "./components/TodoItem/TodoItem";
import AddItem from "./components/AddItem/AddItem";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      task: "Exercise",
      time: "15m",
    },
    {
      id: Math.random(),
      task: "Give dog a bath",
      time: "15m",
    },
    {
      id: Math.random(),
      task: "Do laundry",
      time: "15m",
    },
    {
      id: Math.random(),
      task: "Vacuum floor",
      time: "15m",
    },
  ]);

  const addTask = (i) => {
    setTasks([...tasks, i]);
  };

  const deltetItem = (id) => {
    let list = tasks.filter((task) => task.id !== id);
    setTasks(list);
    console.log(tasks);
  };

  return (
    <div className="App container">
      <h1>Todolist</h1>
      <TodoItem tasks={tasks} del={deltetItem} />
      <AddItem tasks={tasks} addNew={addTask} />
    </div>
  );
}

export default App;
