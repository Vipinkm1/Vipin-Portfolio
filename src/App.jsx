
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services'
import Project from './components/Pages/Project/Project'
import Contact from './components/Pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Sidebar/Profile'
import Detail from './components/Pages/Detail'
function App() {
  return (
    <>
      <BrowserRouter>
      <div className='home-page'>
        <Navbar />
        <div className='hero-section'>
           
                <Profile/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route index element={<Detail/>} />
          <Route path= '/about' element ={<About/>} />  
          <Route path = '/services' element= {<Services/>}/>
          <Route  path = '/project' element= {<Project/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
        </div>
        </div>
      </BrowserRouter> 
    </>
  )
}
export default App
