import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { ContactUs } from '../contactame/contactame'
import './footer.css'
export default function Footer(){

    return(

        <div className='footer'>
            <p>Mis redes sociales, a través de las cuales puedes contactarme:</p>
         <ul className='redes'>
         <a href="https://www.linkedin.com/in/enzo-monti-65bb9a19a/"><img src={linkedin} alt="1" /></a>
            <a href="#https://www.facebook.com/enzo.monti.7"><img src={facebook} alt="2" /></a>
            <a href="#https://www.instagram.com/enzomonti_ok/"><img src={instagram} alt="3" /></a>
       </ul>  

</div> 

        
    )
}