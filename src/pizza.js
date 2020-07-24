import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Pizza(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const history = useHistory()

  const routeToConfirm = () => {
 
    console.log(history)
    history.push('/Confirm')
  }

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
    <form className='form container' onSubmit={onSubmit}>
        
      <div className='form-group submit'>
        <h2>Customize Your Pizza</h2>

       
       

        <div className='errors'>
          
          <div>{errors.name}</div>
          <div>{errors.pizzaSize}</div>
        
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Make Your Pizza</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
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
        </div>

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
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

        <button disabled={disabled} onClick ={routeToConfirm}>Add to Order</button>
      </div>
    </form>
  )
}
