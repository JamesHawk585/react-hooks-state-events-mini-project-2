import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {


  const taskCardComponents =  tasks.map((task) => {
    return <TaskCard task={task} key={task.id}/>
  })

  console.log(tasks)
  return (
    <div className="tasks">
      {taskCardComponents}
    </div>
  );
}

export default TaskList;