import React from "react";
import DeleteButton from "./DeleteButton";

const TaskCard = ({ task }) => {
  console.log(task.text);
  return (
    <>
      <div className="taskCard">
        <h2>{task.text}</h2>
        <p>{task.category}</p>
        <DeleteButton />
      </div>
    </>
  );
};

export default TaskCard;
