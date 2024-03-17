import React from 'react'
import { Link } from 'react-router-dom'
import HomeFeedData from '../../FakeApi/HomeFeedData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCommentAlt, faCommentSms, faList, faListDots, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Comment from '../comments/Comment'

const Feed = (feed) => {
    const [liked, setLiked] = useState(false);
    function hitLIke(){
        setLiked(!liked);
    }

    const[openComment,setOpenComment]=useState(false)

    const commentHandler= () =>{
      setOpenComment(!openComment)
    }

  return (
    <div className='feed'>
        {
            HomeFeedData.map((fed,id)  =>(
                <div className="containerFeed" key={id}>

                    <div className="top-container">
                        <Link to={'/profile/id'}>
                            <div className="user">
                                <img src={fed.feedProfile} alt="" />
                                <div>
                                    <h5>{fed.name}</h5>
                                    <small>{fed.timeAgo} Minutes ago</small>
                                </div>
                            </div>
                        </Link>
                        <span>
                            <FontAwesomeIcon icon={faListDots} />
                        </span>
                    </div>

                    <div className="mid-container">
                        <img src={fed.feedImage} alt="" />
                        <p>{fed.desc}</p>
                    </div>

                    <div className="bottom-container" key={id}>
                        <div className="action-item">
                            <span onClick={hitLIke} className={`like ${liked ? 'like-up' : ''}`}><FontAwesomeIcon icon={faThumbsUp} /> 10k Likes</span>
                            <span onClick={commentHandler}><FontAwesomeIcon icon={faComment}  /> 2.2k Comments</span>
                            <span><FontAwesomeIcon icon={faShare} /> 1k Shares</span>
                        </div>
                    </div>
                    {openComment && <Comment />}
                </div>
                ))
        }
    </div>
  )
}

export default Feed
