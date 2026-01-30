export type TaskStatus = "open" | "in-progress" | "completed";

export interface Task {
    id: string;
    title: string;
    subject: string;
    dueDate?: string;
    status: TaskStatus;
}
