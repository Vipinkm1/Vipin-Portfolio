import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Sidebar/Profile'
import Detail from '../Pages/Detail'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Project from '../Pages/Project/Project'
import Blog from '../Pages/Blog/Blog'
import Contact from '../Pages/Contact/Contact'

const Home = () => {
  const [activeSection , setActiveSection] = useState('Detail')
  //  navigate the page
  const handleNavigate = (section) => {
    setActiveSection(section)
  }
  return (
    <div className='home-page'>
        <Navbar  onNavigate={handleNavigate}/>
        <div className='hero-section'>
            <div className=''>
                <Profile/>
            </div>
            <div className=''>
               {activeSection === 'Detail' && <Detail/>}
               {activeSection === 'about' && <About/>}
               {activeSection === 'services' && <Services/>}
               {activeSection === 'project' && <Project/>}
               {activeSection === 'blog' && <Blog/>}
               {activeSection === 'contact' && <Contact/>}
            </div>
        </div>
    </div>
  )
}

export default Home