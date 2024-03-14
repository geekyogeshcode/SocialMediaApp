import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faUser,faMagnifyingGlass,faEnvelope,faBell, faBars} from '@fortawesome/free-solid-svg-icons'
import CurrentUser from '../../FakeApi/CurrentUserData'
import Darkmode from '../darkMode/Darkmode'

const Nav = () => {
  return (
    <nav>
        <div className="Nav-container">
            <div className="nav-left"> 
                <Link to={'/'}>
                    <h4 className='logo'>SocialMediaApp</h4>
                </Link>
                <Link to={'/'} >
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link to={'/profile/:id'}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <div className="nav-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder='Search' spellCheck='false'/>
                </div>
            </div>
            <div className="nav-right">
                <Darkmode />
                <Link to={'chatbox/:id'}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faBell} />   
                </Link>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faBars}/>
                </Link>
                <div className="user">
                    <img src={CurrentUser.map(user =>( user.ProfieImage))} alt="" />
                    <h4>{CurrentUser.map(user =>(user.name))}</h4>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
