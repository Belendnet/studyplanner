import React from 'react'
import './App.css'
import * as components from  './components'

function App() {
    const [deleteState, setdeleteState] = React.useState(false)
    const [showState, setShowState] = React.useState(false)
    const handleDelete = () => {
        setdeleteState(true);
    }
    const handleShowForm = () => {
        setShowState(true);
    }
    const handleCancel = () => {
        setShowState(false);
    }
    const handleTaskSubmit = () => {
        setShowState(false);
    }
    return (
    <>
        {!deleteState && <components.TaskItem task={{id: '1', title: 'Sample Task', subject: 'Testing', status:  "open"}} onDelete={() => handleDelete()}/>}
        {showState && <components.TaskForm onSubmit={handleTaskSubmit} onCancel={handleCancel}/>}
        <button className="AddTaskButton" onClick={handleShowForm}>Add Task</button>
    </>
  )
}

export default App
