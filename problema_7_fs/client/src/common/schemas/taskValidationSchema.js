import * as yup from "yup";
export const  taskValidationSchema = yup.object({
    title: yup.string("Enter a title").required("Title is required"),
    description: yup
      .string("Enter a description")
      .required("Description is required"),
    priority: yup.string("Enter a priority").required("Priority is required"),
    completed: yup.bool("Enter a completed").required("Completed is required"),
    date: yup.date("Enter a date").required("Date is required"),
  });