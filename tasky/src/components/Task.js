import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Grid, Typography } from '@mui/material'

const Task = (props) => {
  const priorityColor = () => {
    let priority = props.priority
    let color
    switch (priority) {
      case "Low":
        color = "success"
        break
      case "Medium":
        color = "warning"
        break
      case "High":
        color = "error"
        break
      default:
        color = "primary"
    }
    return color
  }

  return (
    <Grid
      item
      key={props.id}
      xs={12}
      md={4}
    >
      <Card sx={{
        backgroundColor: props.done ? 'lightgrey' : 'lightblue',
        padding: '20px'
      }}>
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'white',
            borderRadius: '3px',
            padding: '20px',
            textAlign: 'center'
          }}
        />

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              padding: '20px'
            }}
          >
            <Typography component="p" variant="subtitle2" color="text.primary">
              Due: {props.deadline}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2
            }}>
            <Chip key={props.id} label={props.priority} color={priorityColor()} />
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: 'italic' }}
          >
            {props.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between', padding: '20px' }}>
          <Button variant="contained" size="small" color="success" onClick={props.markDone}>
            Done
          </Button>
          <Button variant="contained" size="small" color="error" onClick={props.deleteTask}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Task