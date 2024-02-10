TaskList:
1. ✅ Pass down data from App to TaskList
2. ✅ Display each task as a Task child (Rememeber key prop!) component to TaskList. 
3. ✅ Update Task compnent to display task text and category 
4. ✅ Remove task from tasks stateful array when delete button is clicked. 
    a. [x] Create a callback function in App.jsx that updates tasks stateful array. 
    b. [x] Pass that function down to deleteButton using useContext(). 
    c. [x] Create an anonymous callback function that calls onDeleteTask() in App.jsx. 
5. Persist deletion to db.json (Stretch Goal)

NewTaskForm:
1. User can create a new task using onSubmit()
2. Update state to include the new task. 
3. Persist the new task to the db. (Stretch Goal)

CategoryFilter:
1. Create a stateful array of strings containing all categories. 
2. Determine how best to only render filtered tasks. 

Good tunes: <iframe width="560" height="315" src="https://www.youtube.com/embed/K3RjISiW7gA?si=QoGPcuxjrOad1v8S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Stretch Gaols: 
1. Persist deletion to db.json.
2. Persist new task to db.json. 