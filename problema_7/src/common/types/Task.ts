
export type Task = {
    id?: string;
    title: string;
    description: string;
    date: string;
    priority: string;
    completed: boolean;
}
export type LocalTask = {
    id: string;
    title: string;
    description: string;
    date: string;
    priority: string;
    completed: boolean;
}