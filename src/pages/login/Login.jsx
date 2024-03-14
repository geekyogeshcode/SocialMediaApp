import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Login = () => {
  return (
    <div className='Login'>
      <div className="card">

        <div className="left">
            <h2>Social Media App</h2>
            <p>Built via React !!</p>
            <span>Don't have Account? </span>
            <Link to={'/signup'} ><button className='btn btn-primary'>  Register</button></Link>
        </div>


        <form action="#" method="post" className='right'>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder='Password' required />
            <button className='btn'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login
