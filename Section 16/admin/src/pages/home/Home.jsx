import React from 'react'
import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        Home Container Stuff
      </div>
    </div>
  )
}

export default Home