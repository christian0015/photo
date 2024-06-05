import React from 'react';
import './aboutComponent.css';

function aboutComponent() {
    
    return (
        <div className="about">
            <div className="center">
                <div className="aboutBlockJ6">
                    <div className="detail">
                        <div className="nameCompany">A propos</div>
                        <h2 className="title">A propos de nous</h2>
                        <div className="text">
                            Qui sommes nous ?..et quels services proposons nous?

                            <br/>
                            <button>Rendez_vous</button>
                        </div>

                    </div>
                    
                    <div className="description">
                        <p>Nous sommes une agence de photographie <strong>Fusion-Photo</strong> basé à Kinshasa, RDC. Nos photographes professionnels sont dédiés à capturer la beauté et l'émotion de chaque instant, transformant vos souvenirs en trésors intemporels.</p>
                        <br/>
                        <p>Nous sommes fiers de vous offrir une qualité photo qui dépasse toutes les attentes.
                            Grâce à notre maîtrise technique et à notre passion pour l'art visuel, chaque cliché devient une œuvre d'art.
                        </p>
                    </div>

                </div>  
            </div>
        </div>
    );
}

export default aboutComponent;