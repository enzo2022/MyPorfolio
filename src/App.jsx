
import './App.css'
import Banner from './components/banner/banner'
import { ContactUs } from './components/contactame/contactame'
import Footer from './components/footer/footer'

import Proyectos from './components/proyectos/proyectos'
import { Skills } from './components/skills/skills'

import Navbar from './components/navbar/navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home/Home'
import Resumen from './components/resumen/Resumen'
import { PDFViewer } from '@react-pdf/renderer';
function App() {


  return (

<Router>
      
      <div >
       
        <Routes>
         <Route  path ='/'element={<><Home/></>}/>
          <Route path="/proyectos" element={<><Proyectos/></>} />
          <Route path="/skills" element= {<><Banner/></> } />
          <Route path='/contactame' element={<> <ContactUs/></>}/>
          <Route path='/resumen' element={<><Resumen/></>}/>
        </Routes>
        
      </div>
    </Router>
    
     
   
    
   
  )
}

export default App
 {/* <Banner />
      <Skills/>
      <Proyectos/>
      <ContactUs/>
      <Footer/> */}