import React from 'react';
// import { ContactUs } from '../contactame/contactame';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {
  const location = useLocation();

  return (
    <nav >
      <ul className='ul'>
  <li className='li'>
    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
    Inicio
     </Link>
  </li>
  <li className='li'>  
     <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
       Acerca de
     </Link>
  </li>
  <li className='li'> 
     <Link to="/proyectos" className={location.pathname === '/proyectos' ? 'active' : ''}>
      Proyectos  
     </Link>
  </li>   
  <li className='li'> 
     <Link to="/contactame" className={location.pathname === '/contactame' ? 'active' : ''}>
     Contactame 
     </Link>
  </li> 
  <li className='li'> 
  <a
                  href='./CVEnzoMonti.pdf'
                  target="_blank"
               
                > Ver CV</a>
     
   
  </li> 
</ul>
     
    </nav>
  );
}

