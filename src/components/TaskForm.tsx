import './TaskForm.css'

export function TaskForm() {
    return (
        <form className="task-form">
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
        </form>
    )
}