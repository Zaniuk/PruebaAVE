
import React from 'react'
import { TableRow, TableCell} from '@mui/material'
import { Task } from '../../../../common/types/Task'
type TableItemProps = {
    task: Task
}
function TableItem({task}: TableItemProps) {
  return (
    <TableRow>
        <TableCell>{task.title}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{task.date}</TableCell>
        <TableCell>{task.priority}</TableCell>
        <TableCell></TableCell>
    </TableRow>
  )
}

export default TableItem