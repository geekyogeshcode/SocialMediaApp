import React, { useState } from 'react'
import './Comment.css'
import CommentsData from '../../FakeApi/CommetData'
import CurrentUser from '../../FakeApi/CurrentUserData'
import { Link } from 'react-router-dom'

const Comment = () => {

  const handleRefresh=(e) =>{
    e.preventDefault()
  }

  return (
    <div className='comments'>
            <div className="write">
              <div className="user">
                <img src={CurrentUser.map(user => user.ProfieImage)} alt="" />
                <h5>{CurrentUser.map(user => user.name)}</h5>
              </div>
              <form action="#">
                <input type="text" placeholder='Write Comment'/>
                <button onClick={handleRefresh} >Post</button>
              </form>
            </div>
      {
        CommentsData.map(user => (
          <div className="comment" key={user.id}>
            <Link to={'/profile/id'}>
              <div className="user">
                <img src={user.commentProfile} alt="" />
                <h5>{user.name}</h5>
              </div>
                <p>{user.CommeText}</p>
            </Link>
          </div>
        ))
      }
      <button>Read more</button>
    </div>
  )
}

export default Comment
