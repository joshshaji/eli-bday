// Timeline.js
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';


import footLeft from '../assets/female-footprint-left.svg';
import footRight from '../assets/female-footprint-right.svg';

import Pic1 from "../assets/El primera día.jpg";
import Pic2 from "../assets/Que talentosa eres.jpg";
import Pic3 from "../assets/Bellesa.jpg";
import Pic4 from "../assets/Toby.jpg";
import Pic5 from "../assets/Tu Mejor Sonrisa.jpg";
import Pic6 from "../assets/Cuando me rompiste el corazón.jpg";
import Pic7 from "../assets/La pintura.jpg";
import Pic8 from "../assets/Coraje.jpg";
import Pic9 from "../assets/Cuando me di cuenta de que eres mio.jpg";
import Pic10 from "../assets/Love youu.jpg";
import Pic11 from "../assets/Primera sugerencia de canción.jpg";
import Pic12 from "../assets/Primera vez que envié flores.jpg";
import Pic13 from "../assets/Viaje con tus amigos.jpg";
import Pic14 from "../assets/La Pulsera.jpg";
import Pic15 from "../assets/Dijiste que sí.jpeg";
import Pic16 from "../assets/La primera comida india.jpeg";
import Pic17 from "../assets/Primera vez que nos conocimos.jpeg";
import Pic18 from "../assets/Nuestro primer beso.jpeg";
import Pic19 from "../assets/Nuestro segundo viaje.jpeg";
import Pic20 from "../assets/boss-baby.jpeg";
import Pic21 from "../assets/micorazon.jpeg";


gsap.registerPlugin(ScrollTrigger);


const FootprintsTrail = ({ events }) => {
  const footprintsRef = useRef(null);
  
  useLayoutEffect(() => {
    const footprints = gsap.utils.toArray('.footprint-set');
    
    footprints.forEach((print, index) => {
      gsap.fromTo(print,
        { 
          opacity: 0,
          y: -10,
          scale: 0.8
        },
        {
          opacity: 0.8,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: print,
            start: 'top center+=100',
            end: 'bottom center',
            scrub: 0.5,
            toggleActions: "play none none reverse",
            onLeave: () => {
              gsap.to(print, {
                opacity: 0,
                duration: 0.4,
                ease: "power1.in"
              });
            }
          }
        }
      );
    });
  }, []);

  return (
    <div className="footprints-container" ref={footprintsRef}>
      {events.map((_, index) => (
        <div 
          key={index} 
          className="footprint-set"
          style={{ '--index': index }}
        >
          <img src={footLeft} className="footprint left" alt="footprint left" />
          <img src={footRight} className="footprint right" alt="footprint right" />
        </div>
      ))}
    </div>
  );
};

const getBackgroundColor = (element) => {
  let backgroundColor = window.getComputedStyle(element).backgroundColor;
  
  // If element is transparent, check parent elements
  while (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
    element = element.parentElement;
    if (!element) break;
    backgroundColor = window.getComputedStyle(element).backgroundColor;
  }
  
  return backgroundColor;
};

const events = [
  {
    date: '5 Agosto 2022',
    title: 'El inicio de nuestra historia',
    description: 'Ese día intercambiamos números y empezamos a hablar por WhatsApp. Desde el primer mensaje, sentí que eras mi persona favorita en el mundo.',
    image: Pic1,
  },
  {
    date: '19 Agosto 2022',
    title: 'La artista que me robó el corazón',
    description: 'Hablamos de anime y luego me enseñaste un dibujo que hiciste. Mi reacción fue algo así como: 😮. ¿Cómo no me voy a enamorar de alguien tan talentoso?',
    image: Pic2,
  },
  {
    date: '24 Agosto 2022',
    title: 'Belleza fuera de mi alcance',
    description: 'Ese día me di cuenta de que eras demasiado para mí, pero bueno, aquí estamos, ¿no? 😏',
    image: Pic3,
  },
  {
    date: '27 Agosto 2022',
    title: 'Toby, mi amor',
    description: 'Me hubiera gustado pasar tiempo con él, siento que capta tan bien tu amor y tu amabilidad.',
    image: Pic4,
  },
  {
    date: '13 Septiembre 2022',
    title: 'Tu sonrisa, mi regalo favorito',
    description: 'Era el día del desarrollador y me dijiste que querías regalarme algo. Te pedí tu mejor sonrisa y vaya que me diste el mejor regalo del mundo. 😊',
    image: Pic5,
  },
  {
    date: '14 Septiembre 2022',
    title: 'El día que me rompiste el corazón',
    description: 'Estabas pasando por un momento difícil y me enviaste una foto que me hizo llorar. Ese día entendí cuánto te amo y que haría lo que fuera por verte feliz.',
    image: Pic6,
  },
  {
    date: '20 Septiembre 2022',
    title: 'El cuadro de la calma',
    description: 'Me enseñaste este cuadro y, en un momento complicado, me llenó de paz. Es un recuerdo que siempre guardaré cerca de mi corazón.',
    image: Pic7,
  },
  {
    date: '12 Noviembre 2022',
    title: 'Tu valentía me enamora',
    description: 'Saliste de tu zona de confort para hacer algo que te hiciera feliz. Ese día me di cuenta de que no solo eres hermosa, sino también increíblemente valiente.',
    image: Pic8,
  },
  {
    date: '19 Noviembre 2022',
    title: 'Eres mía (y lo sabes)',
    description: 'Esta foto captura esa inocencia y dulzura que me hizo enamorarme de ti.',
    image: Pic9,
  },
  {
    date: '1 Diciembre 2022',
    title: 'Loveee youuuuu',
    description: 'Ese día me dijiste "Loveee youuu" en un video, y realmente lo sentí. Fue el día más feliz de mi vida. ❤️',
    image: Pic10,
  },
  {
    date: '14 Diciembre 2022',
    title: 'La primera canción de nuestra lista de reproducción',
    description: 'Me sugeriste una canción y pensé: "¿Va a ser una pequeña canción de gánsteres?" Resultó que sí 😜',
    image: Pic11,
  },
  {
    date: '15 Diciembre 2022',
    title: 'Flores para mi reina',
    description: 'La primera vez que te envié flores fue por tu cumpleaños. Aunque las tuve que enviar antes, espero que hayan llegado con todo mi cariño. 🌹',
    image: Pic12,
  },
  {
    date: '17 Diciembre 2022',
    title: 'El viaje que conquistó tus miedos',
    description: 'Querías hacer este viaje pero te daban miedo los ataques de pánico. No sé si fui yo quien te convencí, pero al final fuiste y lo disfrutaste al máximo. ¡Orgullosa de ti! 😘',
    image: Pic13,
  },
  {
    date: '18 Febrero 2023',
    title: 'La pulsera del amor',
    description: 'Me hiciste una pulsera con un grano de arroz que decía "Joshin ❤️ Eli". Es uno de mis tesoros más preciados. ❤️',
    image: Pic14,
  },
  {
    date: '14 Marzo 2023',
    title: 'El día que dijiste que sí',
    description: 'Te pedí que fueras mi novia y dijiste que sí. LOL, sé que vas a odiar esta foto, pero es uno de mis recuerdos favoritos. ❤️',
    image: Pic15,
  },
  {
    date: '2 Agosto 2023',
    title: 'Comida india y amor',
    description: 'Te animé a probar la comida india por primera vez y te encantó. Después de eso, creo que yo empezó a tener esperanzas en nosotros. 😂',
    image: Pic16,
  },
  {
    date: '15 Enero 2024',
    title: 'El abrazo que lo cambió todo',
    description: 'Finalmente nos conocimos en persona. Pude abrazarte por primera vez, y nada en el mundo puede describir lo que sentí ese día. ❤️',
    image: Pic17,
  },
  {
    date: '17 Enero 2024',
    title: 'Nuestro primer beso',
    description: 'Fue un poco incómodo, pero también perfecto. Uno de mis recuerdos más divertidos y románticos. 😘',
    image: Pic18,
  },
  {
    date: '14 Octubre 2024',
    title: 'Nuestro segundo viaje juntos',
    description: 'Esta vez fuimos de glamping. Fue un viaje lleno de risas, amor y momentos inolvidables. ❤️',
    image: Pic19,
  },
  {
    date: '15 Noviembre 2024',
    title: 'Mi jefa favorita',
    description: 'Estoy tan orgulloso de todo lo que has logrado con tu finca y tu negocio. Eres una auténtica jefa, y yo soy tu mayor fan. 😍',
    image: Pic20,
  },
  {
    date: '18 Diciembre 2024',
    title: 'Tu cumpleaños, mi celebración favorita',
    description: 'Feliz cumpleaños, mi amor. No puedo esperar para celebrarlo contigo y hacerte sentir como la reina que eres. ❤️',
    image: Pic21,
  }
];

const Timeline = () => {
  const timelineRef = useRef([]);
  const containerRef = useRef(null);

  // Clear refs on each render
  timelineRef.current = [];

  const addToRefs = (el) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const bgColor = getBackgroundColor(containerRef.current);
      
      // Create a matching solid background for content wrapper
      const contentWrappers = document.querySelectorAll('.timeline-content-wrapper');
      contentWrappers.forEach(wrapper => {
        wrapper.style.setProperty('--bg-color', bgColor);
      });
    }
  }, []);


  useLayoutEffect(() => {
    timelineRef.current.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top center+=120',
          end: 'bottom center',
          scrub: true,
        },
      });

      tl.fromTo(
        el.querySelector('.timeline-image'),
        { clipPath: 'circle(0% at 50% 50%)' },
        { clipPath: 'circle(100% at 50% 50%)', duration: 2 }
      );

      tl.fromTo(
        el.querySelector('.timeline-text'),
        { opacity: 0, y: 70 },
        { opacity: 0.6, y: 0, duration: 0.5 },
        '-=1.0'
      );
    });
  }, []);

  return (
    <>
        <h1 id="memory">
            Carril De La Memoria
        </h1>
        <FootprintsTrail events={[...Array(400).keys()]} />
        <div ref={containerRef} className="timeline-container">
              {events.map((event, index) => (
                  <div className="timeline-item" key={index} ref={addToRefs}>
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-content-wrapper">
                        <div className="timeline-content">
                            <div className="timeline-image-container">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="timeline-image" />
                            </div>
                            <div className="timeline-text">
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
        </div>
    </>
  );
};

export default Timeline;