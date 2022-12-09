import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import {taskValidationSchema as validationSchema} from "../../common/schemas/taskValidationSchema";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Typography,
} from "@mui/material";

import httpService from "../../common/services/httpService";

function TaskForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = React.useState({
    title: "",
    description: "",
    priority: 2,
    completed: false,
    date: new Date().toISOString().slice(0, 10),
  });

  const formik = useFormik({
    initialValues: {
      title: data.title,
      description: data.description,
      priority: data.priority,
      completed: data.completed,
      date: data.date,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit:  async (values) => {
      try {
        if (id) {

          await httpService.put(`/tasks/${id}`, values).then(() => {
            navigate("/");
          });
        } else {
          await httpService.post("/tasks", values).then(() => {
            navigate("/");
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  const getTask = async (id) => {
    try {
      const task = await httpService.get(`/tasks/${id}`);
      setData(task.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (id) {
    useEffect(() => {
      getTask(id);
    }, []);
  }
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{
          maxWidth: '600px',
          margin: '0 auto',
          mt: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
        }}>
          <Typography variant="h4" component="h1" align="center">
            {id ? "Edit Task" : "Add Task"}
          </Typography>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <RadioGroup
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            aria-label="priority"
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            error={formik.touched.priority && Boolean(formik.errors.priority)}
            // helperText={formik.touched.priority && formik.errors.priority}
          >
            <FormControlLabel value={1} control={<Radio />} label="Low" />
            <FormControlLabel value={2} control={<Radio />} label="Medium" checked={data.completed || true} />
            <FormControlLabel value={3} control={<Radio />} label="High" />
          </RadioGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Completed"
            id="completed"
            name="completed"
            labelPlacement="end"
            value={formik.values.completed}
            onChange={formik.handleChange}
            error={formik.touched.completed && Boolean(formik.errors.completed)}
          />
          <TextField
            fullWidth
            id="date"
            name="date"
            label="Date"
            type={"date"}
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default TaskForm;
