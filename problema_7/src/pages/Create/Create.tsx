import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./FormTextField";
import * as yup from 'yup'
import { DatePicker } from "./DatePicker";
import { CompletedCheck } from "./CompletedCheck";
import { PriorityRadio } from "./PriorityRadio";
import { TaskService } from "../../common/services/TaskService";

interface FormValues {
  title: string;
  description: string;
  date: string;
  priority: string;
  completed: boolean;
}
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  date: yup.string().required("Date is required"),
  priority: yup.string().required("Priority is required"),
});

export default function Create() {
  const taskService = new TaskService();
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          title: "",
          description: "",
          date: "",
          priority: "Medium",
          completed: false
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          taskService.createTask(values);
          formikHelpers.setSubmitting(false);

        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field 
                  name="title"
                  label="Title"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                type="text"
                  name="description"
                  label="Description"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="date"
                  size="small"
                  type="date"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="completed"
                  size="small"
                  label="Completed" 
                  type="checkbox"
                  component={CompletedCheck}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="priority"
                  size="small"
                  label="Priority"
                  component={PriorityRadio}
                  type="radio"
                  defaultValue="Medium"
                />
              </Grid>


              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}