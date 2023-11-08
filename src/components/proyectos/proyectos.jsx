import React from 'react';
import Pi from '../../assets/videoGame.png'
import Card from '../proyectosCard/ProyectosCard';
import Trivia from '../../assets/trivia.png'
import './proyectos.css'
import Navbar from '../navbar/navbar';

export default function Proyectos(){
  
    const projects = [
        {
          title: "VideoGame",
          description: "Una aplicación que muestra todos los videojuegos junto con su respectiva información.",
          imgUrl: Pi,
          git: 'https://github.com/enzo2022/Videojuegos_PI',
          deploy:'https://videojuegos-pi-95cr.vercel.app'
        },
        {
          title: "Trivia",
          description: "Una aplicación que permite jugar y aprender el concepto de programación.",
          imgUrl: Trivia,
          git: 'https://github.com/enzo2022/trivia',
          deploy:'https://trivia-rho-two.vercel.app/'
        },
      
      ];

      
        
        
    return(
      <div> 
        <div className='fondoProyectos'>
         <Navbar/>
<h2 className='proyectos'>Proyectos</h2>
<p className='proyectosText'>Estas son algunos de mis proyectos</p>
{
                            projects.map((project, index) => {
                              return (
                                <Card
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

         
        </div></div>
    )
}