
import Navbar from '../Navbar/Navbar'
import Profile from '../Sidebar/Profile'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-page'>
        <Navbar />
        <div className='hero-section'>
            <div className=''>
                <Profile/>
            </div>
            <div className=''>
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Home