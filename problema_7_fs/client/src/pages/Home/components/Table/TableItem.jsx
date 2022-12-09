import React, { useEffect } from 'react'
import { Button,   TableCell,  TableRow } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import httpService from '../../../../common/services/httpService';
function TableItem({task}) {
  const navigate = useNavigate();
  const deleteTask = async (id) => {
    try {
      await httpService.delete(`/tasks/${id}`).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TableRow>
          <TableCell>{task.title}</TableCell>
          <TableCell>{task.description}</TableCell>
          <TableCell>{task.priority}</TableCell>
          <TableCell>
            <Button variant="contained" color="warning" onClick={() => navigate(`/edit/${task.id}`)}>E</Button>
            <Button variant="contained" color="error" onClick={() => deleteTask(task.id)}>D</Button>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
  )
}

export default TableItem