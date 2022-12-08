import React from 'react'
import { FieldProps, getIn } from 'formik'
import { RadioGroupProps, FormControl,FormControlProps, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
export const PriorityRadio: React.FC<FieldProps & FormControlProps> = props => {
  const isTouched = getIn(props.form.touched, props.field.name)
  const errorMessage = getIn(props.form.errors, props.field.name)

  const {field, form, ...rest } = props
    //Create radio buttons

  return (
        <>
         <Typography variant="h6" component="label" gutterBottom>
                    Prioridad:
                    <br />
        </Typography>
        <FormControl component='fieldset'>
        <RadioGroup {...rest} {...field} sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
        <FormControlLabel value="Low" control={<Radio />} label="Baja" />
        <FormControlLabel value="Medium" control={<Radio />} label="Media"/>
        <FormControlLabel value="High" control={<Radio />} label="Alta" />
        </RadioGroup>
        </FormControl>

            
            
        </>
      

  )
}
