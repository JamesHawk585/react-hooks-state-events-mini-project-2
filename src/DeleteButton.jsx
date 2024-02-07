import React from 'react'
import { useContext } from "react"
import { tasksContext } from './App'
import TaskCard from './TaskCard'

const DeleteButton = ({ task, onDeleteTask, taskId }) => {

    // const onDeleteTaskContext = useContext()

  return (
    <button className='deleteButton' onClick={() => onDeleteTask(taskId)}>Delete</button>
  )
}

export default DeleteButton