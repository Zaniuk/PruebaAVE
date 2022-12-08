import React from 'react'
import { TaskService } from './TaskService'

export const TaskServiceContext = React.createContext<TaskService>({} as TaskService)

interface TaskServiceProviderProps {
  children: React.ReactNode
}


export default function TaskServiceProvider({children}: TaskServiceProviderProps) {
  const taskService = new TaskService()

  return (
    <TaskServiceContext.Provider value={taskService}>
      {children}
    </TaskServiceContext.Provider>
  )
}
