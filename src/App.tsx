import React from 'react'
import './App.css'
import * as components from  './components'
import type { Task } from './components/Task'

function App() {
    const [tasks, setTasks] = React.useState<Task[]>([
        {id: '1', title: 'Sample Task', subject: 'Testing', status: 'open'}
    ])
    const [showState, setShowState] = React.useState(false)

    const handleDelete = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const handleShowForm = () => {
        setShowState(true)
    }

    const handleCancel = () => {
        setShowState(false)
    }

    const handleTaskSubmit = (taskData: Omit<Task, 'id'>) => {
        const newTask: Task = {
            id: Date.now().toString(),
            ...taskData
        }
        setTasks(prev => [...prev, newTask])
        setShowState(false)
    }

    return (
    <>
        <components.TaskList tasks={tasks} onDeleteTask={handleDelete} />
        {showState && <components.TaskForm onSubmit={handleTaskSubmit} onCancel={handleCancel}/>}
        <button className="AddTaskButton" onClick={handleShowForm}>Add Task</button>
    </>
  )
}

export default App
