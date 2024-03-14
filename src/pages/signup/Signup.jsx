import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='Signup'>
      <div className="card">

        <div className="left">
            <h2>Social Media App</h2>
            <p>Built via React !!</p>
            <span>Have an Account? </span>
           
            <Link to={'/login'}> <button className='btn btn-primary'> Login   </button></Link>
          
        </div>


        <form action="#" method="post" className='right'>
            <input type="text" placeholder='Username' required/>
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required />
            <button className='btn'>Register</button>
        </form>
        {/* <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faUser} /> */}
      </div>

    </div>
  )
}

export default Signup
