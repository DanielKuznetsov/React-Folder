import React from 'react'
import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        Home Container Stuff
      </div>
    </div>
  )
}

export default Home