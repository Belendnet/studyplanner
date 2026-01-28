import type {Task} from "./Task.ts";
import './TaskItem.css'
interface TaskItemProp {
    task: Task;
    onDelete: (id: string) => void;
}
export function TaskItem({task, onDelete}: TaskItemProp) {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>Subject: {task.subject}</p>
            {task.dueDate && <p>Due Date: {task.dueDate}</p>}
            <p>Status: {task.status}</p>
            <button onClick={() => onDelete(task.id)}>Delete Task</button>
        </div>

    )
}