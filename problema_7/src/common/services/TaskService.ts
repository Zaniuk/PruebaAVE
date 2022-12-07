import { Task } from "../types/Task";

export class TaskService {
    private tasks: Task[] = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
            date: '2020-01-01',
            priority: 'Low',
            completed: false
        }
    ];
    getTasks(): Task[] {
        return this.tasks;
    }
    getTask(id: number): Task  | undefined{
        return this.tasks.find(task => task.id === id);
    }
    createTask(task: Task): void {
        this.tasks.push(task);
    }
    updateTask(task: Task): void {
        const index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[index] = task;
    }
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}