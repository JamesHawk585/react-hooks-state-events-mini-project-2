import React from "react";
import DeleteButton from "./DeleteButton";


const TaskCard = ({ task, tasks, setTasks }) => {

  const { taskId } = task

  const onDeleteTask = (taskId) => {
    console.log(taskId)
    console.log(task.id)
    return setTasks(tasks.filter(task => taskId !== task.id))
  }; 

  return (
    <>
      <div className="taskCard">
        <h2>{task.text}</h2>
        <p>{task.category}</p>
        <DeleteButton task={task} onDeleteTask={onDeleteTask} taskId={taskId}/>
      </div>
    </>
  );
};

export default TaskCard;
