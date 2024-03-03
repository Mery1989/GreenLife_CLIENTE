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
            <img className="left-content" src="./../../../public/image1_carousel.png" />
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
            <img className='carrouselImage' src="https://res.cloudinary.com/ddtolhmab/image/upload/v1709377385/3_or2cvs.jpg" />
          </div>
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className='carrouselImage' src="https://res.cloudinary.com/ddtolhmab/image/upload/v1709456706/flores_jqxd26.png" />
          </div>
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <div >
            <img className='carrouselImage' src="https://res.cloudinary.com/ddtolhmab/image/upload/v1709377386/2_honk8z.jpg" />
          </div>
          
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}


export default Carrousel;

