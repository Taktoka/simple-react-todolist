import React, { useRef, useState } from "react";
import "./additem.css";

function AddItem(props) {
  const { addNew } = props;

  let inputRef = useRef();
  let inputRefS = useRef();

  const [task, setTask] = useState({
    task: "",
    time: "",
    id: Math.random(),
  });

  const handleName = (e) => {
    setTask({
      task: e.target.value,
      time: task.time,
      id: Math.random(),
    });
  };

  const handleAge = (e) => {
    setTask({
      task: task.task,
      time: e.target.value,
      id: Math.random(),
    });
  };

  const hndleSub = (e) => {
    e.preventDefault();
    addNew(task);
    inputRef.current.value = "";
    inputRefS.current.value = "";
  };

  return (
    <div>
      <form className="adding-form">
        <input
          onChange={handleName}
          type="text"
          placeholder="Enter Name"
          id="name"
          ref={inputRef}
        />
        <input
          onChange={handleAge}
          type="number"
          placeholder="Enter Age"
          id="age"
          ref={inputRefS}
        />
        <button onClick={hndleSub}>Add</button>
      </form>
    </div>
  );
}

export default AddItem;
