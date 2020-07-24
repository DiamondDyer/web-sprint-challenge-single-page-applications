import React, { useState, useEffect } from 'react'
import Home from './Home'
import Pizza from './pizza'
import Confirm from './Confirm'
import {Switch, Route} from 'react-router-dom'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
 
  name: '',
  
  pizzaSize: '',
 
  toppings: {
    cheese: false,
    pineapple: false,
    bacon: false,
    pepperoni: false,
  },
  specialInstructions: '',
  
}
const initialFormErrors = {
  name: '',
  pizzaSize: '',
  
}

const initialUsers = []
const initialDisabled = true


export default function App() {
  
  const [users, setUsers] = useState(initialUsers)         
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)      


  const postNewUser = newUser => {
 
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
       
        console.log(res)
        setUsers([...users, res.data ])
        setFormValues(initialFormValues)
        
      })
      .catch(err => {
        debugger
      })
  }

 
  const inputChange = (name, value) => {
    // 🔥 STEP 11- RUN VALIDATION WITH YUP
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const checkboxChange = (name, isChecked) => {
    // 🔥 STEP 7- IMPLEMENT!
    //  set a new state for the whole form
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, // not an array
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      
      toppings: Object.keys(formValues.toppings).filter(tp => formValues.toppings[tp]),
    }
    // 🔥 STEP 9- POST NEW FRIEND USING HELPER
    postNewUser(newUser)


  }

  
 
  useEffect(() => {
    // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='container'>

        <Switch>
        <Route path = '/Confirm'>
         <Confirm users = {users}/>
       </Route>
       
       <Route path = '/pizza'>
         <Pizza  
         values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}/>
       </Route>

       <Route path = '/'>
         <Home/>
       </Route>




     </Switch>
     

     

      
    </div>
  )
}
