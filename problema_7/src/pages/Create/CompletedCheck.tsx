import React from 'react'
import { FieldProps, getIn } from 'formik'
import { CheckboxProps, Checkbox, Typography } from '@mui/material'

/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
export const CompletedCheck: React.FC<FieldProps & CheckboxProps> = props => {
  const isTouched = getIn(props.form.touched, props.field.name)
  const errorMessage = getIn(props.form.errors, props.field.name)

  const {field, form, ...rest } = props
    //Create a list of options
  return (
    <>
    <Typography variant="h6" component="label" gutterBottom>
      Completado: 
    <Checkbox
      {...rest}
      {...field}
      />
      </Typography>
      </>
      

  )
}
