import React from 'react'
import {Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import { TaskService } from '../../../../common/services/TaskService'
import { Task } from '../../../../common/types/Task'
import TableItem from './TableItem'
function TasksTable() {
  const taskService = new TaskService()
  const [tasks, setTasks] = React.useState<Task[]>([])
  React.useEffect(() =>{
    setTasks(taskService.getTasks())
    console.log(taskService.getTasks())
  }, [])
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Priority</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableItem task={task} key={task.id}/>
        ))}
        </TableBody>
    </Table>

  )
}

export default TasksTable