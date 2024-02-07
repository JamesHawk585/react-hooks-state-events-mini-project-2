import React from "react";
import TaskCard from "./TaskCard";
import { useContext } from 'react'
import { tasksContext } from "./App";


// Changed tasks from props to useContext, seeing errors in dataflow now. Ensure consistancy across components.  

function TaskList({ tasks, setTasks }) {
  // const tasks = useContext(tasksContext)



  

  const taskCardComponents =  tasks.map((task) => {
    return <TaskCard task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
  })

  return (
    <div className="tasks">
      {taskCardComponents}
    </div>
  );
}

export default TaskList;