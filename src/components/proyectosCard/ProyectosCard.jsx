import React from 'react';

import giticon from '../../assets/git.svg'
import deployicon from '../../assets/deploy.png'
import './card.css'
export default function Card({ title, description, imgUrl ,git, deploy}) {
    return (
      
        <div className='card'>
          <h4 className='h4'>{title}</h4>
          <img className='img' src={imgUrl} />
          <div className='div' >
            <div><span className='span'>{description}</span></div>
          <div className='info'> <a href={git}><img src={giticon} alt="3" /></a>
         <a href={deploy}><img src={deployicon} alt="3" /></a></div>
        
          </div>
        </div>
     
    )
  }