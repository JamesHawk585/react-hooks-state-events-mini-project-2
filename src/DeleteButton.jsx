import React from 'react'
import { useContext } from "react"

const DeleteButton = ({ task }) => {
    const onDeleteTask = useContext(onDeleteTask)
  return (
    <button className='deleteButton' onClick={() => onDeleteTask(task.id)}>Delete</button>
  )
}

export default DeleteButton