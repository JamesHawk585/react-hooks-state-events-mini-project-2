import React from "react";

function NewTaskForm({ handleSubmit }) {
  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" placeholder='details'/>
      </label>
      <label>
        Category
        <select name="category" placeholder='category'>
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;