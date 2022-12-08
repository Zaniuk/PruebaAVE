import React from 'react'
import { TaskService } from './TaskService'

// create a taskservicecontext

const TaskServiceContext = React.createContext<TaskService>(new TaskService())

// create a provider

export const TaskServiceProvider = ({children}: {children: React.ReactNode}) => {
    const taskService = new TaskService()
    return (
        <TaskServiceContext.Provider value={taskService}>
            {children}
        </TaskServiceContext.Provider>
    )
}


