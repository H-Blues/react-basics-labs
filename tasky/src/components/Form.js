import React, { useState } from "react"
import { Box, Button, MenuItem, TextField } from "@mui/material"

const AddTaskForm = (props) => {
  const [priorityState, setPriorityState] = useState({
    priorities: [
      { value: 'Low', label: 'Low' },
      { value: 'Medium', label: 'Medium' },
      { value: 'High', label: 'High' }
    ]
  })

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
        }}
        onSubmit={props.submit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            name="title"
            label="Task Title"
            InputLabelProps={{ shrink: true }}
            onChange={(event) => props.change(event)}
          />
        </div>

        <div>
          <TextField
            required
            name="deadline"
            label="Deadline"
            InputLabelProps={{ shrink: true }}
            type="date"
            onChange={(event) => props.change(event)}
          />
        </div>

        <div>
          <TextField
            required
            select
            defaultValue="Low"
            name="priority"
            label="Priority"
            InputLabelProps={{ shrink: true }}
            onChange={(event) => props.change(event)}
          >
            {priorityState.priorities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            name="description"
            id="outlined-multiline-static"
            label="Task Details"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={4}
            onChange={(event) => props.change(event)}
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              m: 1,
              p: 1,
              width: '95%'
            }}
          >
            Add Task
        </Button>
        </div>
      </Box>
    </div >
  )
}

export default AddTaskForm