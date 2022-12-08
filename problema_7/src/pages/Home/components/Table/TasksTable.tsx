import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { TaskServiceContext } from "../../../../common/services/TaskServiceProvider";
import { Task } from "../../../../common/types/Task";
import TableItem from "./TableItem";
function TasksTable() {
  const taskService = React.useContext(TaskServiceContext);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  React.useEffect(() => {
    setTasks(taskService.getTasks());
  }, []);
  if (!tasks) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Typography variant="h5">No tasks</Typography>
      </Box>
    );
  } else {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" color="primary" href="/create">
            Create
          </Button>
        </Box>
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
              <TableItem task={task} key={task.id} />
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
}

export default TasksTable;
