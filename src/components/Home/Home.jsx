import React from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Sidebar/Profile'
import Detail from '../Pages/Detail'
const Home = () => {
  return (
    <div className='home-page'>
        <Navbar/>
        <div className='hero-section'>
            <div className=''>
                <Profile/>
            </div>
            <div className=''>
                <Detail/>
            </div>
        </div>
    </div>
  )
}

export default Home