import React from 'react'
import './AddPost.css'
import CurrentUserData from '../../FakeApi/CurrentUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'


const AddPost = () => {
    function handleRefresh(e){
        e.preventDefault()
    }
  return (

    <form action="#" className='postForm'>
        <div className="user form-top">
            <img src={CurrentUserData.map(user => user.ProfieImage)} alt="" />
            <input type="text" placeholder="What's on your mind"/>
            <button onClick={handleRefresh} className='btn btn-primary'>Post</button>
        </div>

        <div className="post-categories">
            <label htmlFor="file">
                <span><FontAwesomeIcon className='tags' icon={faImage} />Photos</span>
            </label>
            <label htmlFor="file">
                <span><FontAwesomeIcon className='tags' icon={faVideo} />Videos</span>
            </label>
            <span className='icon'>
                <FontAwesomeIcon  className='tags' icon={faTags} />Tags
            </span>

            <span className='icon'>
                <FontAwesomeIcon className='tags'  icon={faSmile} />Feelings
            </span>
            <input type="file" hidden id='file' />
        </div>
    </form>
  )
}

export default AddPost
