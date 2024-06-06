import React from 'react';
import ReactDOM from 'react-dom';

import './carouselComponent.css';
import Casting1 from './Asset/projets/Castings/ImageCasting (9).jpg';
import Casting2 from './Asset/projets/Castings/ImageCasting (18).jpg';
import Evenementiel1 from './Asset/projets/Evenementiels/ImageEvenementiel (29).jpg';
import Evenementiel2 from './Asset/projets/Evenementiels/ImageEvenementiel (14).jpg';
import Evenementiel3 from './Asset/projets/Evenementiels/ImageEvenementiel (18).jpg';
import Business1 from './Asset/projets/Business/ImageBusiness (3).jpg';
import Business2 from './Asset/projets/Business/ImageBusiness (6).jpg';
import picture1 from './Asset/projets/Pictures/ImagePicture (19).jpg';
import picture2 from './Asset/projets/Pictures/ImagePicture (17).jpg';


console.clear();

const slides = [
  {
    title: "Mode Élégante",
    subtitle: "Kinshasa, RDC",
    description: "Révélez votre style",
    image: Casting1
  },
  {
    title: "Chic Urbain",
    subtitle: "Kinshasa, RDC",
    description: "Laissez-vous éblouir",
    image: Casting2
  },
  {
    title: "Mariage",
    subtitle: "Kinshasa, RDC",
    description: "Rêvez en blanc",
    image: Evenementiel1
  },
  {
    title: "Fête",
    subtitle: "Kinshasa, RDC",
    description: "Gala et activité",
    image: Evenementiel2
  },
  {
    title: "Beauté Congolaise",
    subtitle: "Kinshasa, RDC",
    description: "Immortalisation",
    image: Evenementiel3
  },
  {
    title: "Model Art & Design",
    subtitle: "Kinshasa, RDC",
    description: "Le succès en image",
    image: Business1
  },
  {
    title: "Élégance en Affaires",
    subtitle: "Kinshasa, RDC",
    description: "L'excellence artistique",
    image: Business2
  },
  {
    title: "Studio Créatif",
    subtitle: "Collections",
    description: "L'aventure vous attend",
    image: picture1
  },
  {
    title: "Art en Images",
    subtitle: "Kinshasa, RDC",
    description: "À vous l'appareil",
    image: picture2
  }
];



function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function CarouselComponent() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (<div className="Carousel">
  <div className="Middel">
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div></div></div>
  );
}


export default CarouselComponent;
