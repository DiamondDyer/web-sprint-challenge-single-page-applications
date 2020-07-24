import * as yup from 'yup'

const formSchema = yup.object().shape({

  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is Required"),
  pizzaSize: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'extra large'], "Pizza Size is required"),

  specialInstructions: yup
    .string()
 
})

export default formSchema
