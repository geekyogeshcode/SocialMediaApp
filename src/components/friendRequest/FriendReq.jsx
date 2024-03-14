import React from 'react'
import './FriendReq.css'
import FriendReqData from '../../FakeApi/FirendReqData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleXmark, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

const FriendReq = () => {
  return (
    <div className='friendReq'>
        <h4>Friend Requiest</h4>

        {FriendReqData.map(friReq =>(
            <div className="request" key={friReq.id}>
                <Link to={'/profile/id'}>
                    <div className="info" key={friReq.id}>
                        <div className="user">
                            <img src={friReq.img} alt="" />
                        </div>
                        <div className="info-name">
                            <h5>{friReq.name}</h5>
                            <p>{friReq.info}</p>
                        </div>
                    </div>
                </Link>
                        <div className="action">
                            <FontAwesomeIcon icon={faCheck} className='accept'/>
                            <FontAwesomeIcon icon={faXmark} className='reject'/> 
                        </div>


                {/* <div className="action">
                    <button className='btn btn-primary'> </button>
                    <button className='btn btn-'> </button>
                </div> */}
            </div>
        ))}
    </div>
  )
}

export default FriendReq
