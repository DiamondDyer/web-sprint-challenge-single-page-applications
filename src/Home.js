import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Home() {

    const history = useHistory()

  const routeToForm = () => {
    // WHY?????
    // PERHAPS the link shouldn't work unless the user is authed
    // we need a React Router equivalent of history.pushState
    // history.pushState(null, null, '/items-list') NOT GONNA WORK
    console.log(history)
    history.push('/pizza')
  }


  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-720x405.jpg'
        alt=''
      />
      <button
        onClick={ routeToForm}
        className='pizza-button'
      >
        Make Your Pizza!
      </button>
    </div>
  )
}
