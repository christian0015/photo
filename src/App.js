import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Assurez-vous d'importer le fichier CSS d'AOS
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
// import logo from './logo.svg';
// import logo from '../public/Fusion-Inc-logo.jpg';
import logo from './Fusion-Inc-logo.jpg';
import './App.css';
import './component/aboutComponent';
import AboutComponent from './component/aboutComponent';
import CarouselComponent from './component/carouselComponent';
import ServiceComponent from './component/serviceComponent';
import FooterComponent from './component/footerComponent';

function App() {
  const [message, setMessage] = useState('');

    useEffect(() => {
      AOS.init();
      AOS.init({
        duration: 3000, // Durée de base
        delay: (el, i) => i * 3000, // Délai croissant pour chaque lettre
      });
        fetch('/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

  return (
    <div className="App"><span className='start' >Start <Analytics/><SpeedInsights/></span>

      <section className='section1'>
          <header className='header'>
            <div className='header-titte'>
              <div className='header-titte1'>
                {Array.from('ELEVEZ VOTRE').map((letter, index) => (
                  <span key={index} data-aos="fade-right" className='header-titte1'>{letter}</span>
                ))}
              </div>
              <div className='header-titte2'>
                {Array.from('EXPERIENCE PHOTOGRAPHIQUE').map((letter, index) => (
                  <span key={index} data-aos="fade-right" className='header-titte2'>{letter}</span>
                ))}
              </div>
            </div>
            <div className='header-order-contenair'>
              <div className='header-order'>PRE-RESERVATION</div>
            </div>
          </header>

          <article>
          <iframe src='https://my.spline.design/polaroidgocopy-a0d20aff0f2486f1fee3547c7060f8b0/' data-aos="zoom-in" frameborder='0' width='100%' height='100%'></iframe>
          </article>

          <aside>
            <div className='notification'>
              <div className='notification-list'>
                <div className='notification-block' data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className='notification-block-title' >Technologie Avancée</div>
                  <div className='notification-block-description'>
                    Équipements modernes pour des photos précises.
                     Portraits, événements, projets commerciaux, résultats garantis.
                  </div>
                </div>

                <div className='notification-block' data-aos="zoom-in-up" data-aos-duration="3000">
                  <div className='notification-block-title'>Design Futuriste</div>
                  <div className='notification-block-description'>
                    Un studio avant-gardiste à Kinshasa pour des séances photo uniques et immersives.
                     Inspiration et innovation à chaque détail.
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <rate>
            <div className='rate-img'>
               <img src="https://i.pinimg.com/236x/5c/a8/b7/5ca8b757fa4f5fd245a50338319eb415.jpg" className="rate-img-profil" alt="logo" data-aos="zoom-in-right" />
               <img src="https://img.freepik.com/premium-photo/illustration-beautiful-girl-with-long-hair_218381-22749.jpg" className="rate-img-profil" alt="logo" data-aos="zoom-in-right" />
               <img src="https://i.pinimg.com/736x/de/4f/9b/de4f9bee36a70826cde1d6750b6d78ec.jpg" className="rate-img-profil" alt="logo" data-aos="zoom-in-right" />
            </div>
            <div className='rate-text' data-aos="zoom-in-right">Chaque photo raconte une histoire. Merci pour cette expérience extraordinaire et pour les images exceptionnelles." – Clients Satisfaits</div>
          </rate>

          <div className='bottom-header'>
            <div className='bottom-header1'>
              <div className='bottom-header-text'>Qualité<br/>Photo Inégalée</div>
              <div className='bottom-header-button'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
              </div>
            </div>
            <div className='bottom-header2'>
              <div className='bottom-header-logo'><img className='bottom-header-logo' src={logo} alt='logo fusion photo'/></div>
              <nav>
              <a href=""  rel="noopener noreferrer" className='bottom-header-items'>Acceuil</a>
              <a href="#About"  rel="noopener noreferrer" className='bottom-header-items'>A propos</a>
              <a href="#Services" rel="noopener noreferrer" className='bottom-header-items'>Services</a>
              <a href="#footer" target="_blank" rel="noopener noreferrer" className='bottom-header-items'>FAQ</a>
              </nav>
              
            </div>
          </div>


      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <section className='sectionCarrousel'>
        {/* <div className='carrousel-Title'>Réalisations</div> */}
        <div className='carrousel-container'><CarouselComponent/></div>
        
      </section>
      <br/>
      <br/>
      <br/>
      <br/>


      <header className="r">
        {/* <img src={lgo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <div id="About">
        <AboutComponent/>
        <br/><br/>
      </div>

      <div id="Services">
        <br/><br/>
        <ServiceComponent/>
        <br/><br/><br/>
      </div>

      <br/><br/><p>{message}</p>

      <div id="Footer">
        <br/><br/>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
