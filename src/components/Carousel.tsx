import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Define the Slide type for the prop
interface Slide {
  image: string;
  caption: string;
  description?: string;
}

interface CarouselComponentProps {
  slides: Slide[];  // slides will be an array of Slide objects
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ slides }) => {
  return (

    slides.length > 1 ? (
      <Carousel data-bs-theme="dark" className="rounded-4 overflow-hidden shadow-lg" style={{ width: "100%", height: "400px" }}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block rounded-4"
              style={{ objectFit: 'fill', width: "100%", height: "100%" }}
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    ) : (
      <div className="single-slide-container">
        <img
          className="d-block rounded-4 w-100"
          style={{ objectFit: 'fill', width: "100%", height: "400px", paddingTop: "10px"}}
          src={slides[0]?.image}
          alt="Event Banner"
        />
      </div>
    )
  );
}

export default CarouselComponent;
