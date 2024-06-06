import React from 'react';
import ReactDOM from 'react-dom';
import SlideCarousel from './Carousel';

import './carouselComponent.css';

function CarouselComponent() {
    return (
        <div className="Carousel">
            <div className="Middel">
            <SlideCarousel/>
            </div>
        </div>
    );
}

export default CarouselComponent;
