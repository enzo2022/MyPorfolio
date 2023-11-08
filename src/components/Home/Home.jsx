import { useState, useEffect } from "react";
import './home.css'
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function Home(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Full stack", "Frontend dev"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return(
 <div>
    <div> </div>
       
        <div className="fondo">
       <Navbar/>
        <div className="text-container">
    <p>Hola!!</p> 
    <p>Mi Nombre Enzo </p>
    <p>{text}</p>
    </div>
    <div className="fondotext "></div>
 <p className="textoHome">Soy Enzo, un programador apasionado con experiencia en el desarrollo de aplicaciones web. Mi especialidad es el desarrollo full-stack, donde uso tecnologías como JavaScript, React y Node.js. También tengo sólidos conocimientos en bases de datos SQL y NoSQL, lo que me permite crear soluciones escalables y robustas.
            </p>
            <Footer />
        </div>
        </div>
    )
}