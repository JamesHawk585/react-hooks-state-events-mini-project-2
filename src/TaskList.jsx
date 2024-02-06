import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {

  console.log(tasks)
  return (
    <div className="tasks">
     {tasks.map((task) => {
      <TaskCard task={task} key={id}/>
     })}
    </div>
  );
}

export default TaskList;