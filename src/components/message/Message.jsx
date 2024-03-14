import React from 'react'
import './Message.css'
import MessagesData from '../../FakeApi/MessageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faUser,faMagnifyingGlass,faEnvelope,faBell, faBars, faEdit, faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='messages'>
        <div className="message-top">
            <h4>Message</h4>
            <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="message-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search"  placeholder='Search Message' />
        </div>
        <div className="border-div"></div>

        {MessagesData.map(msg =>(
            <Link to={'/chatbox/id'} key={msg.id}>
                <div className="message" >
                    <div className="user">
                        <img src={msg.img} alt="" />
                        <div className="active-user"></div>
                    </div>
                    <div className="message-body">
                        <h5>{msg.name}</h5>
                        <p>{msg.mText}</p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Message
