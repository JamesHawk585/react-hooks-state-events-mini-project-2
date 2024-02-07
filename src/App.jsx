import "./App.css";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { useEffect, useState, useContext, createContext } from "react";

export const categories = ["All", "Code", "Food", "Money", "Misc"];

const API = "http://127.0.0.1:5555/tasks";


export const tasksContext = createContext();


function App() {
  const [tasks, setTasks] = useState([]);

  // const onDeleteTask = (taskId) => {
  //   setTasks(tasks.filter(taskId !== task.id))
  // };

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setTasks);
  }, []);

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <tasksContext.Provider value={{tasks}}>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </tasksContext.Provider>
    </div>
    
  );
}

export default App;
