import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const StyledHome = styled.div`
{
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
}
 

img{
  width:50%;
}

h1{
  color:red;
  border: 2px solid yellow;
  font-size:4rem;
}

button{
  font-size:2rem;
  width: 200px;
  height:100px;
  border: 2px solid yellow;
  color: red;
  margin-top : 10%;
}

`


export default function Home() {

    const history = useHistory()

  const routeToForm = () => {

    console.log(history)
    history.push('/pizza')
  }


  return (
    <StyledHome className='home-wrapper'>

      <h1>Lambda Eats</h1>
      <img
        className='home-image'
        src='https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-720x405.jpg'
        alt=''
      />
      <div>
      <button
        onClick={ routeToForm}
        className='pizza-button'
      >
        Make Your Pizza!
      </button>
      </div>
    </StyledHome>
  )
}
