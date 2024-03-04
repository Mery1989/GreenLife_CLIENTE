import { useState } from 'react';
import { Carousel} from 'react-bootstrap';



import './Carrousel.css';

function Carrousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
};

return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className="left-content"  alt="imagen de una persona sujetando un cubo de basura verde" src="./../../../public/image1_carousel.png" />
          </div>
          <Carousel.Caption className="right-content ">
            <p className='texto'>Ven a nuesto curso!</p>
            <h3>Pienso, luego existo</h3>
            <button className='boton'>Visitanos</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className='carrouselImage image2' alt="imagen que pone coming soon" src="./../../../public/fotocarruselmobile2.jpg" />
          </div>
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className='carrouselImage image3' alt="imagen de margaritas de colores" src="./../../../public/macetas.png" />
          </div>
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className='carrouselImage image4'alt="imagen de primavera" src="./../../../public/molino.png" />
          </div>
          
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}


export default Carrousel;

