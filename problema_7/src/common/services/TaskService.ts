import { Task } from "../types/Task";


export class TaskService {
    
    // private storage: UserStorage = new UserStorage('tasks');
    

    getTasks(): Task[] {
        // get from storage

        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            return JSON.parse(tasks);
        }
        return [];
    }   
    getTask(id: string): Task | undefined {
        const tasks = this.getTasks();
        return tasks.find(t => t.id === id);
    }
    createTask(task: Task): void {
        const tasks = this.getTasks();
        task.id = String(tasks.length + 1);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    updateTask(task: Task): void {
        const tasks = this.getTasks();
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        tasks[taskIndex] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
    deleteTask(task: Task): void {
        const tasks = this.getTasks();
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}