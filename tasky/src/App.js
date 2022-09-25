import React, { useState } from 'react'
import Task from './components/Task'
import AddTaskForm from './components/Form'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import { Typography, Container, Grid } from '@mui/material'

function App () {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", priority: "Low", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", priority: "Medium", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", priority: "High", deadline: "Today", done: false },
    ]
  })

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    priority: "",
    deadline: "",
  })

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]
    tasks[taskIndex].done = !tasks[taskIndex].done
    setTaskState({ tasks })
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]
    tasks.splice(taskIndex, 1)
    setTaskState({ tasks })
  }

  const formChangeHandler = (event) => {
    let form = { ...formState }

    switch (event.target.name) {
      case "title":
        form.title = event.target.value
        break
      case "description":
        form.description = event.target.value
        break
      case "deadline":
        form.deadline = event.target.value
        break
      case "priority":
        form.priority = event.target.value
        break
      default:
        form = formState
    }
    setFormState(form)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    const tasks = [...taskState.tasks]
    const form = { ...formState }
    form.id = uuidv4()
    tasks.push(form)
    setTaskState({ tasks })
  }

  return (
    < div className="container" >
      { /* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            backgroundColor: "gray",
            textAlign: "center",
            color: "white",
            padding: "20px",
            margin: "20px 0 40px 0",
            borderRadius: "4px"
          }}>
          Tasky
        </Typography>
      </Container>
      { /* End App Header */}

      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-top" justifyContent="center">
          {taskState.tasks.map((task, index) => (
            <Task
              key={task.id}
              title={task.title}
              priority={task.priority}
              description={task.description}
              deadline={task.deadline}
              done={task.done}
              markDone={() => doneHandler(index)}
              deleteTask={() => deleteHandler(index)}
            />
          ))}
        </Grid>
      </Container>
      {/* End Task Card Grid */}

      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
    </div >
  )
}

export default App
