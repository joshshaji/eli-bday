// Timeline.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

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
import Pic11 from "../assets/Primera sugerencia de canción.PNG";
import Pic12 from "../assets/Primera vez que envié flores.jpg";
import Pic13 from "../assets/Viaje con tus amigos.jpg";
import Pic14 from "../assets/La Pulsera.PNG";
import Pic15 from "../assets/Dijiste que sí.jpeg";
import Pic16 from "../assets/La primera comida india.jpeg";
import Pic17 from "../assets/Primera vez que nos conocimos.jpg";
import Pic18 from "../assets/Nuestro primer beso.jpg";
import Pic19 from "../assets/Nuestro segundo viaje.jpg";


gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: '5 Agosto 2022',
    title: 'El primera día',
    description: "Esta es la primera vez que intercambiamos números y comenzamos a hablar por WhatsApp. Sentí una conexión instantánea contigo.",
    image: Pic1, // Replace with your actual image paths
  },
  {
    date: '19 Agosto 2022',
    title: 'Que talentosa eres',
    description: 'Empezamos a hablar de anime y luego me mostraste este dibujo y mi boca dijo así 😮',
    image: Pic2,
  },
  {
    date: '24 Agosto 2022',
    title: 'Bellesa',
    description: 'Cuando me di cuenta de que estabas un poco fuera de mi alcance :p',
    image: Pic3,
  },
  {
    date: '27 Agosto 2022',
    title: 'Toby ❤️',
    description: 'Yo también lo extraño 😢',
    image: Pic4,
  },
  {
    date: '13 Septiembre 2022',
    title: 'Tu Mejor Sonrisa',
    description: 'Era el día del desarrollador y dijiste que querías regalarme algo a distancia y te pedí que me regalaras tu mejor sonrisa :)',
    image: Pic5,
  },
  {
    date: '14 Septiembre 2022',
    title: 'Cuando me rompiste el corazón',
    description: 'Estabas pasando por una crisis muy mala. Me enviaste esta foto y no pude tomarla y lloré también. Me di cuenta de lo importante que eres para mí y que haría cualquier cosa para hacerte feliz. Te amé de verdad desde el primer día, no sé cómo, pero lo hice.',
    image: Pic6,
  },
  {
    date: '20 Septiembre 2022',
    title: 'La pintura',
    description: 'Esta pintura me trajo mucha tranquilidad en un momento difícil. Es algo muy cercano a mi corazón.',
    image: Pic7,
  },
    {
    date: '12 Noviembre 2022',
    title: 'Coraje',
    description: 'En aquel entonces no te gustaban muchos cambios, pero decidiste salir de tu zona de confort y hacer algo que te apetecía. Esto te hizo muy feliz y es uno de mis momentos favoritos.',
    image: Pic8,
  },
  {
    date: '19 Noviembre 2022',
    title: 'Cuando me di cuenta de que eres mio',
    description: 'Esta foto captura esa inocencia en ti de la que me enamoré.',
    image: Pic9,
  },
  {
    date: '1 Diciembre 2022',
    title: 'Love youu',
    description: 'Primera vez que dijiste "te amo" en un video y realmente lo sentí',
    image: Pic10,
  },
  {
    date: '14 Diciembre 2022',
    title: 'Primera sugerencia de canción',
    description: 'Empezamos a hablar de canciones y esta fue la primera canción que me sugeriste, pensé que podrías ser un pequeño gángster, resultó ser cierto :P',
    image: Pic11,
  },
  {
    date: '15 Diciembre 2022',
    title: 'Primera vez que envié flores',
    description: 'La primera vez que te envié flores fue para tu cumpleaños <3 (tenías planes así que tuve que enviarlas unos días antes)',
    image: Pic12,
  },
  {
    date: '17 Diciembre 2022',
    title: 'Viaje con tus amigos',
    description: 'Querías hacer este viaje pero te daba miedo tener ataques de pánico. No sé si fui yo quien te convencí :p, pero al final fuiste y te lo pasaste genial :D',
    image: Pic13,
  },
  {
    date: '18 Febrero 2023',
    title: 'La Pulsera',
    description: 'Me hiciste esa pulsera con ese grano de arroz que dice "Joshin ❤️ Eli". Una de mis posesiones favoritas❤️',
    image: Pic14,
  },
  {
    date: '14 Marzo 2023',
    title: 'Dijiste que sí',
    description: 'Te pedí que fueras mi novia y dijiste que sí❤️',
    image: Pic15,
  },
  {
    date: '2 Agosto 2023',
    title: 'La primera comida india',
    description: 'Quería que probaras la comida india por primera vez y te encantó, después de eso tenías algunas esperanzas en nosotros 😂',
    image: Pic16,
  },
  {
    date: '15 Enero 2024',
    title: 'Primera vez que nos conocimos',
    description: 'Decidí que ya era suficiente, quería ir a verte y este es por lejos uno de los días más memorables para mí, cuando pude abrazarte por primera vez, nada puede explicar ese sentimiento.',
    image: Pic17,
  },
  {
    date: '17 Enero 2024',
    title: 'Nuestro primer beso',
    description: 'Tan incómodo como era, uno de mis recuerdos favoritos 😂',
    image: Pic18,
  },
  {
    date: '14 Octobre 2024',
    title: 'Nuestro segundo viaje',
    description: 'Nuestro segundo viaje juntos, esta vez Glamping. Fue un viaje muy divertido y relajante.',
    image: Pic19,
  }
];

const Timeline = () => {
  const timelineRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  useEffect(() => {
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
        { opacity: 1, y: 0, duration: 0.5 },
        '-=1.0'
      );
    });
  }, []);

  return (
    <>
        <h1 id="memory">
            Carril De La Memoria
        </h1>
        <div className="timeline-container">
              {events.map((event, index) => (
                  <div
                      className="timeline-item"
                      key={index}
                      ref={addToRefs}
                  >
                      <div className="timeline-date">{event.date}</div>
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
              ))}
        </div>
    </>
  );
};

export default Timeline;