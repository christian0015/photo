import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/aboutComponent';
import AboutComponent from './component/aboutComponent';

function App() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

  return (
    <div className="App"><span className='start' >Start</span>

      <section className='section1'>
          <header className='header'>
            <div className='header-titte'>
              <div className='header-titte1'>ELEVATE YOUR</div>
              <div className='header-titte2'>PHOTO EXPERIENCE</div>
            </div>
            <div className='header-order-contenair'>
              <div className='header-order'>PRE-ORDER</div>
            </div>
          </header>

          <article>
          <iframe src='https://my.spline.design/polaroidgocopy-a0d20aff0f2486f1fee3547c7060f8b0/' frameborder='0' width='100%' height='100%'></iframe>
          </article>

          <aside>
            <div className='notification'>
              <div className='notification-list'>
                <div className='notification-block'>
                  <div className='notification-block-title'>ADVANCED TECCHNOLOGY</div>
                  <div className='notification-block-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>

                <div className='notification-block'>
                  <div className='notification-block-title'>FUTURISTIC DESIGN</div>
                  <div className='notification-block-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <rate>
            <div className='rate-img'>
               <img src="https://i.pinimg.com/236x/5c/a8/b7/5ca8b757fa4f5fd245a50338319eb415.jpg" className="rate-img-profil" alt="logo" />
               <img src="https://img.freepik.com/premium-photo/illustration-beautiful-girl-with-long-hair_218381-22749.jpg" className="rate-img-profil" alt="logo" />
               <img src="https://i.pinimg.com/736x/de/4f/9b/de4f9bee36a70826cde1d6750b6d78ec.jpg" className="rate-img-profil" alt="logo" />
            </div>
            <div className='rate-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.</div>
          </rate>

          <div className='bottom-header'>
            <div className='bottom-header1'>
              <div className='bottom-header-text'>UNMATCHED <br/> PHOTO QUALITY</div>
              <div className='bottom-header-button'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
              </div>
            </div>
            <div className='bottom-header2'>
              <div className='bottom-header-logo'>ZENITH</div>
              <nav>
              <a href=""  rel="noopener noreferrer" className='bottom-header-items'>Home</a>
              <a href="#About"  rel="noopener noreferrer" className='bottom-header-items'>About</a>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className='bottom-header-items'>Shop</a>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className='bottom-header-items'>FAQ</a>
              </nav>
              
            </div>
          </div>


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

      <main id="About">
      <AboutComponent/>
        <p>{message}</p>
        
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
