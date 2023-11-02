
import './App.css'
import Banner from './components/banner/banner'
import { ContactUs } from './components/contactame/contactame'
import Footer from './components/footer/footer'
import Proyectos from './components/proyectos/proyectos'
import { Skills } from './components/skills/skills'

function App() {


  return (
<div className='appfondo'>
    <div >
      <Banner />
      <Skills/>
      <Proyectos/>
      <ContactUs/>
      <Footer/>
    </div>
    
    </div>
  )
}

export default App
