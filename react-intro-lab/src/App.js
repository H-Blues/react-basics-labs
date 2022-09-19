import Task from './components/Task'
import './App.css'

function App () {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher" />
      <Task title="Laudry" deadline="Tomorrow" description="Fold Laudry and put away" />
      <Task title="Tidy" deadline="Today" description="" />
    </div>
  )
}

export default App
