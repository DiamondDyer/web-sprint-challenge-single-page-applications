import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const StyledForm = styled.div`

display:flex;
justify-content:center;
align-items:center;

.form-group-inputs{
  display:flex;
  flex-direction:column;
}

.form-group-checkboxes{
  display:flex;
  flex-direction:column;
}

h2{
  color:red;
  border: 2px solid yellow;
  font-size:4rem;
}

h4{
  color:red;
  border: 2px solid yellow;
  font-size:2rem;
}

label{
  margin: 2%;
}

button{
  font-size:2rem;
  width: 200px;
  height:80px;
  border: 2px solid yellow;
  color: red;
  margin-top : 10%;
}

.errors{
  color:red;
}
`

export default function Pizza(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

 

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <StyledForm>
    <form className='form container' onSubmit={onSubmit}>
        
      <div className='form-group submit'>
        <h2>Customize Your Pizza</h2>
        <Link to ="/">Home</Link>

       
       

     
      </div>

      <div className='form-group-inputs'>
        <h4>Make Your Pizza</h4>

       
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <div className = 'errors'>{errors.name}</div>

    
        <label>Pizza Size
          <select
            onChange={onInputChange}
            value={values.pizzaSize}
            name='pizzaSize'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='extra large'>Extra Large</option>
          </select>
        </label>
        <div className = 'errors'>{errors.pizzaSize}</div>
        </div>

      <div className='form-group-checkboxes'>
        <h4>Toppings</h4>

        <label>Cheese
          <input
            type="checkbox"
            name='cheese'
            checked={values.toppings.cheese === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Pineapple
          <input
            type="checkbox"
            name='pineapple'
            checked={values.toppings.pineapple === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Bacon
          <input
            type="checkbox"
            name='bacon'
            checked={values.toppings.bacon === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.toppings.pepperoni === true}
            onChange={onCheckboxChange}
          />
        </label>
        <div className = 'specialInstructions'>
            <h4>Special Instructions</h4>

        <label>Enter Special Instructions&nbsp;
          <input
            value={values.specialInstructions}
            onChange={onInputChange}
            name='specialInstructions'
            type='text'
          />
        </label>
        </div>

      <button className ="btn" disabled={disabled} >Add to Order</button>
      </div>
    </form>
    </StyledForm>
  )
}
