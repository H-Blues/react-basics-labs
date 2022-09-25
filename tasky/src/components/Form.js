import React from "react"
import { Box, Button, TextField } from "@mui/material"

const AddTaskForm = (props) => {
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
    </div>
  )
}

export default AddTaskForm