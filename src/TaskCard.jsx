import React from 'react'

const TaskCard = ({ task }) => {
  return (
    <div>{task.text}</div>
  )
}

export default TaskCard