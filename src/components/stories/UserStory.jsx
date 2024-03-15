import React from 'react'
import CurrentUserData from '../../FakeApi/CurrentUserData'
import './Stories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const UserStory = () => {
  return (
    <div className="full-story">
        <div className='story'>
            <div className="user">
                <img src={CurrentUserData.map(user => user.ProfieImage)} alt="" />
            </div>
                <img src={CurrentUserData.map(user => user.CoverPhoto)} alt="" />
        </div>
                {/* <h5>{CurrentUserData.map(user => user.name)}</h5> */}
                <label htmlFor="storyFiles">
                    <FontAwesomeIcon icon={faAdd}/>
                </label>
                <input type="file" id='storyFiles' hidden/>
                <h5>Add story</h5>
    </div>
  )
}

export default UserStory
