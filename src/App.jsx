
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services'
import Project from './components/Pages/Project/Project'
import Blog from './components/Pages/Blog/Blog'
import Contact from './components/Pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= '/about' element ={<About/>} />  
          <Route path = '/services' element= {<Services/>}/>
          <Route  path = '/project' element= {<Project/>}/>
          <Route path = '/blog' element = {<Blog/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}
export default App
