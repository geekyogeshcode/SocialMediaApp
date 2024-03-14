import React, { useState } from 'react'
import './Darkmode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

const Darkmode = () => {

    const darkHandle=() =>{
        document.querySelector("body").classList.toggle('darkmode')
    }

  return (
    <div className='DarkModeIcon' >
        <FontAwesomeIcon icon={faToggleOn}  onClick={darkHandle}/>
    </div>
  )
}

export default Darkmode
