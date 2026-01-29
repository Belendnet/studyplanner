import React from 'react'
import './App.css'
import * as components from  './components'

function App() {
    const [state, setState] = React.useState(false)
    const handleDelete = () => {
        setState(true);
    }
    return (
    <>
        {!state && <components.TaskItem task={{id: '1', title: 'Sample Task', subject: 'Testing', status:  "open"}} onDelete={() => handleDelete()}/>}
        <components.TaskForm />
    </>
  )
}

export default App
