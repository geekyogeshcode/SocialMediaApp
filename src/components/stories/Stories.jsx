import React from 'react'
import UserStory from './UserStory'
import storiesData from '../../FakeApi/StoriesData'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import './Stories.css'

const Stories = () => {
  return (
    <div className='stories'>
        <UserStory />

        <Swiper className="mySwiper"
        style={{borderRadius:' 2vw',width:'80%'}}
            slidesPerView={4}
            spaceBetween={10}>
                {
                    storiesData.map((story,id) =>(
                            <SwiperSlide key={id}>
                            <div className="story"  >
                                    <div className="user">
                                        <img src={story.storyProfile} alt="" />
                                    </div>
                                    <img src={story.story} alt="" />
                            </div>
                            <h5>{story.name}</h5>
                                
                            </SwiperSlide>
                    ))
                }
        </Swiper>
    </div>
  )
}

export default Stories
