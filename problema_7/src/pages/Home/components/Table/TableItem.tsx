
import React from 'react'
import { TableRow, TableCell , Button} from '@mui/material'
import { Task } from '../../../../common/types/Task'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TaskServiceContext } from '../../../../common/services/TaskServiceProvider';
import { useNavigate } from 'react-router-dom';
type TableItemProps = {
    task: Task
}
function TableItem({task}: TableItemProps) {
  const taskService = React.useContext(TaskServiceContext);
  const navigate = useNavigate();
  return (
    <TableRow>
        <TableCell>{task.title}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{task.date}</TableCell>
        <TableCell>{task.priority}</TableCell>
        <TableCell>
            <Button variant="contained" color="primary" href={`/edit/${task.id}`}>
                <EditIcon />
                
            </Button>
            
            <Button variant="contained" color="error" onClick={() => {taskService.deleteTask(task.id);}}>
                <DeleteIcon />
            </Button>

        </TableCell>
    </TableRow>
  )
}

export default TableItem