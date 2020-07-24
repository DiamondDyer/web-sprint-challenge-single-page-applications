import React, { useState, useEffect } from 'react'
import Home from './Home'
import Pizza from './pizza'
import Confirm from './Confirm'
import User from './user'
import {Switch, Route} from 'react-router-dom'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'

const StyledUser = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:5%;

h2{
  color:red;
  border: 2px solid yellow;
  font-size:2rem;
}

`


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
        setUsers([...users, res.data ])
        setFormValues(initialFormValues)
       
        console.log(newUser)
        
        
      })
      .catch(err => {
        debugger
      })
  }

 
  const inputChange = (name, value) => {
   
    yup
      .reach(formSchema, name)
     
      .validate(value)
     
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
     
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const checkboxChange = (name, isChecked) => {
   
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, 
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      
      toppings: Object.keys(formValues.toppings).filter(tp => formValues.toppings[tp]),

      specialInstructions: formValues.specialInstructions.trim(),
    }

   
 
    postNewUser(newUser)


  }

  
 
  useEffect(() => {

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
     
     {
        users.map(user => {
          return (
            <StyledUser>
            <h2> Order Confirmed! Your Pizza Is On The Way</h2>
            <User key={user.id} details={user} />
            </StyledUser>
          )
        })
      }
     

      
    </div>
  )
}
