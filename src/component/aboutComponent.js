import React from 'react';
import './aboutComponent.css';

function aboutComponent() {
    
    return (
        <div className="about">
            <div className="center">
                <div className="aboutBlockJ6">
                    <div className="detail">
                        <div className="nameCompany">Fusion-Photo</div>
                        <h2 className="title">A propos de nous</h2>
                        <div className="text">
                        Qui sommes-nous ? Et quels services proposons-nous ?

                            <br/>
                            <button>Rendez_vous</button>
                        </div>

                    </div>
                    
                    <div className="description">
                        <p>Nous sommes une <strong>agence de photographie professionnelle</strong> <strong>Fusion-Photo</strong> basée à <strong>Kinshasa, RDC</strong>. Nos <strong>photographes professionnels</strong> sont dédiés à capturer la beauté et l'émotion de chaque instant, transformant vos souvenirs en trésors intemporels.</p>
                        <br/>
                        <p>Nous sommes fiers de vous offrir une <strong>qualité photo inégalée</strong> qui dépasse toutes les attentes. Grâce à notre <strong>maîtrise technique</strong> et à notre passion pour l'<strong>art visuel</strong>, chaque cliché devient une œuvre d'art.</p>
                    </div>

                </div>  
            </div>
        </div>
    );
}

export default aboutComponent;