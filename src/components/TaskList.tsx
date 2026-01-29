import { TaskItem } from './TaskItem';
import type { Task } from './Task';

interface Props {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onDeleteTask }: Props) {
    return (
        <>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDeleteTask}
                />
            ))}
        </>
    );
}
