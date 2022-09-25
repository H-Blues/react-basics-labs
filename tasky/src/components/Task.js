import React from 'react'

const Task = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.done ? "lightgray" : "#5bb4c4" }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <button className="doneButton" onClick={props.markDone}>Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  )
}

export default Task