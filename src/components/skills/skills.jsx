
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.css'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="co">
            <div className="row">
                <div className="col-12">
                    <div className='skill-bx'>
                        <h2>Habilidades</h2>
                        <p>Estas son algunas de las tecnologías con las que me gusta trabajar la mayor parte del tiempo.</p>
                        <Carousel responsive={responsive} infinite={true} >
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="Image" />
                                <h5 className='tecnologias'>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.clipartmax.com/png/full/291-2918933_html-and-css-logo.png" alt="Image" />
                                <h5 className='tecnologias'> HTML5 / CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Image" />
                                <h5 className='tecnologias'>React / Redux TK </h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Image" />
                                <h5 className='tecnologias'>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png" alt="Image" />
                                <h5 className='tecnologias'>SQL / Postgress</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="Image" />
                                <h5 className='tecnologias'>NoSQL / MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt="Image" />
                                <h5 className='tecnologias'>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Image" />
                                <h5 className='tecnologias'>GIT / GIT Hub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}