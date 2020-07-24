import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Getting Your Pizza Ready </h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Pizza Size: {details.pizzaSize}</p>
      <p>Special Instructions: {details.specialInstructions}</p>
     
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User
