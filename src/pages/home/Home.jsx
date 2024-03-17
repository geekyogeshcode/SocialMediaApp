import React from 'react'
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addPost/AddPost'
import Feeds from '../../components/feeds/Feeds'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Stories />
      <AddPost />
      <Feeds />
    </div>
  )
}

export default Home
