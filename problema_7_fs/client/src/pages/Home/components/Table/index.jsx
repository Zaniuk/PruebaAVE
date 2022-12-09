import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import httpService from '../../../../common/services/httpService'
import React from "react";
import { useEffect } from "react";
import TableItem from "./TableItem";
import { useNavigate } from "react-router-dom";

const StyledTableCell = ({children}) => {
    return (
        <TableCell sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          width: 'fit-content'
        }}> 
            {children}
        </TableCell>
    )
}
function CustomTable() {
  const navigate = useNavigate();
    const [tasks, setTasks] = React.useState([]);
    const getTasks = async () => {
        const response = await httpService.get('/tasks')
        console.log(response.data)
        setTasks(response.data)
    }
    useEffect(() => {
        getTasks() 
    },[])
  return (
    <TableContainer component={Paper} elevation={6}>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Title</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Priority</StyledTableCell>
          <StyledTableCell>Actions</StyledTableCell>
          <StyledTableCell><Button variant="contained" color="success" onClick={() => navigate('/create')}>Create</Button></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableItem task={task} key={task.id} />
          ))}

      </TableBody>
    </Table>
          </TableContainer>
  );
}

export default CustomTable;
