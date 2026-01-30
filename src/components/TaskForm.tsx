import React from 'react'
import './TaskForm.css'
import type { TaskStatus } from './Task'

interface TaskFormData {
    title: string;
    subject: string;
    dueDate?: string;
    status: TaskStatus;
}

interface TaskFormProps {
    onSubmit: (data: TaskFormData) => void;
    onCancel: () => void;
}

export function TaskForm({onSubmit, onCancel}: TaskFormProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const dueDateValue = formData.get('dueDate') as string | null

        onSubmit({
            title: String(formData.get('title') ?? ''),
            subject: String(formData.get('subject') ?? ''),
            dueDate: dueDateValue ? String(dueDateValue) : undefined,
            status: formData.get('status') as TaskStatus
        })
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title" style = {{color: "black"}}>Title:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div className="form-group">
                <label htmlFor="subject" style = {{color: "black"}}>Subject:</label>
                <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
                <label htmlFor="dueDate" style = {{color: "black"}}>Due Date:</label>
                <input type="date" id="dueDate" name="dueDate" />
            </div>
            <div className="form-group">
                <label htmlFor="status" style = {{color: "black"}}>Status:</label>
                <select id="status" name="status" required>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit">Add Task</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}