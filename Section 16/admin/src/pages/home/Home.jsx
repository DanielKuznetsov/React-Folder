import React from 'react'
import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className='homeContainer'>Container</div>
    </div>
  )
}

export default Home