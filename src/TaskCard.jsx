import React from "react";

const TaskCard = ({ task }) => {

    console.log(task.text)
  return (
    <div className="taskCard">
      <h2>{task.text}</h2>
      <p>{task.category}</p>
    </div>
  );
};

export default TaskCard;
