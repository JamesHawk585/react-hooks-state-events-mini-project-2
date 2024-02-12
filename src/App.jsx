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

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setTasks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskObject = {
      newTaskDescription: e.target[0].value,
      newTaskCategory: e.target[1].value,
    }
      // Make POST request here: 

    useEffect((e) => {
      e.preventDefault()
      fetch(API), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskObject)
      }});

    // setTasks(tasks.push(newTaskObject));
  };
  // )

  // Throws error that tasks.map is not a function in TaskList.jsx. This may be because newTaskObject does not have an Id. Id is provided by the backend when changes are persisted. Consided a post request in handleSubmit().

  // Not sure if push() or spread operator is best here.
  // If I persist newTaskObject with handleSubmit(), will the initial GET request update the tasks stateful array upon calling onAddTask(), without re-rendering the entire DOM?

  // console.log(newTaskObject)

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter />
      <NewTaskForm handleSubmit={handleSubmit} />
      <tasksContext.Provider value={{ tasks }}>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </tasksContext.Provider>
    </div>
  );
}

export default App;
