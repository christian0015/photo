import React, { useState } from 'react';
import './serviceComponent.css';
import evenementielImage from './Asset/projets/Evenementiels/ImageEvenementiel (29).jpg';
import castingImage from './Asset/projets/Castings/ImageCasting (9).jpg';
import pictureImage from './Asset/projets/Pictures/ImagePicture (19).jpg';
import studioImage from './Asset/projets/Pictures/ImagePicture (17).jpg';
import businessImage from './Asset/projets/Business/ImageBusiness (3).jpg';

const services = {
    evenementiel: {
        title: "Événementiel",
        description: "Capturer chaque moment de vos événements spéciaux.",
        image: evenementielImage,
    },
    casting: {
        title: "Casting",
        description: "Des séances photo professionnelles pour vos besoins de casting.",
        image: castingImage,
    },
    picture: {
        title: "Picture",
        description: "Des images magnifiques pour immortaliser vos souvenirs.",
        image: pictureImage,
    },
    studio: {
        title: "Studio",
        description: "Des séances photo en studio avec un équipement de pointe.",
        image: studioImage,
    },
    business: {
        title: "Business",
        description: "Photographie d'affaires pour une image professionnelle.",
        image: businessImage,
    },
};

function ServiceComponent() {
    const [selectedService, setSelectedService] = useState('evenementiel');

    return (
        <div className="centerService">
            <div className="service-component">
                <div className="service-text">
                    <h2 className="titleSection">Services</h2>
                    <h2>{services[selectedService].title}</h2>
                    <p>{services[selectedService].description}</p>
                    <div className="service-buttons">
                        <button onClick={() => setSelectedService('evenementiel')}>Événementiel</button>
                        <button onClick={() => setSelectedService('casting')}>Casting</button>
                        <button onClick={() => setSelectedService('picture')}>Picture</button>
                        <button onClick={() => setSelectedService('studio')}>Studio</button>
                        <button onClick={() => setSelectedService('business')}>Business</button>
                    </div>
                </div>
                <div className="service-image">
                    <img src={services[selectedService].image} alt={services[selectedService].title} />
                </div>
            </div>
        </div>
    );
}

export default ServiceComponent;
