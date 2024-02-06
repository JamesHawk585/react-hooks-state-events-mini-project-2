import React from 'react'

const DeleteButton = () => {
  return (
    <button className='deleteButton' onClick={(e) => onDeleteTask(e)}>Delete</button>
  )
}

export default DeleteButton