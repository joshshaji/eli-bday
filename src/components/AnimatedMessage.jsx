import React, { useEffect, useRef } from 'react';
import { gsap, Expo, Elastic } from 'gsap';
import { useNavigate } from "react-router-dom"; 
import './AnimatedMessage.css'; // same CSS as before

// Import assets
import profilePicture from '../assets/Eli10.jpg';
import hatImage from '../assets/hat.svg';
import ballon1 from '../assets/ballon1.svg';
import ballon2 from '../assets/ballon2.svg';
import ballon3 from '../assets/ballon3.svg';

const BirthdayAnimation = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay the start of the animation slightly
    // This mimics the delay introduced by the alert and ensures DOM is fully ready
    const timeoutId = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const textBoxChars = container.querySelector('.hbd-chatbox');
      const hbd = container.querySelector('.wish-hbd');

      if (!textBoxChars || !hbd) {
        console.error('Required elements not found. Check class names.');
        return;
      }

      // Split chars
      textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split('').join('</span><span>')}</span>`;
      hbd.innerHTML = `<span>${hbd.innerHTML.split('').join('</span><span>')}</span>`;

      const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15deg',
      };

      const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg',
      };

      const tl = gsap.timeline();

      tl.to(container, {
        duration: 0.6,
        visibility: 'visible',
      })
        .from('.one', {
          duration: 0.7,
          opacity: 0,
          y: 10,
        })
        .from('.two', {
          duration: 0.4,
          opacity: 0,
          y: 10,
        })
        .to(
          '.one',
          {
            duration: 0.7,
            opacity: 0,
            y: 10,
          },
          '+=3.5'
        )
        .to(
          '.two',
          {
            duration: 0.7,
            opacity: 0,
            y: 10,
          },
          '-=1'
        )
        .from('.three', {
          duration: 0.7,
          opacity: 0,
          y: 10,
        })
        .to(
          '.three',
          {
            duration: 0.7,
            opacity: 0,
            y: 10,
          },
          '+=3'
        )
        .from('.four', {
          duration: 0.4,
          scale: 0.2,
          opacity: 0,
        })
        .from('.fake-btn', {
          duration: 0.1,
          scale: 0.2,
          opacity: 0,
        })
        .to('.hbd-chatbox span', {
          duration: 1,
          visibility: 'visible',
          stagger: 0.05,
        })
        .to(
          '.fake-btn',
          {
            duration: 0.1,
            backgroundColor: 'rgb(127, 206, 248)',
          },
          '+=2'
        )
        .to(
          '.four',
          {
            duration: 0.5,
            scale: 0.2,
            opacity: 0,
            y: -150,
          },
          '+=1'
        )
        .from('.idea-1', {
          duration: 0.7,
          ...ideaTextTrans,
        })
        .to(
          '.idea-1',
          {
            duration: 0.7,
            ...ideaTextTransLeave,
          },
          '+=2.5'
        )
        .from('.idea-2', {
          duration: 0.7,
          ...ideaTextTrans,
        })
        .to(
          '.idea-2',
          {
            duration: 0.7,
            ...ideaTextTransLeave,
          },
          '+=2.5'
        )
        .from('.idea-3', {
          duration: 0.7,
          ...ideaTextTrans,
        })
        .to('.idea-3 strong', {
          duration: 0.5,
          scale: 1.2,
          x: 10,
          backgroundColor: 'rgb(21, 161, 237)',
          color: '#fff',
        })
        .to(
          '.idea-3',
          {
            duration: 0.7,
            ...ideaTextTransLeave,
          },
          '+=2.5'
        )
        .from('.idea-4', {
          duration: 0.7,
          ...ideaTextTrans,
        })
        .to(
          '.idea-4',
          {
            duration: 0.7,
            ...ideaTextTransLeave,
          },
          '+=2.5'
        )
        .from(
          '.idea-5',
          {
            duration: 0.7,
            rotationX: 15,
            rotationZ: -10,
            skewY: '-5deg',
            y: 50,
            z: 10,
            opacity: 0,
          },
          '+=1.5'
        )
        .to(
          '.idea-5 span',
          {
            duration: 0.7,
            rotation: 90,
            x: 8,
          },
          '+=1.4'
        )
        .to(
          '.idea-5',
          {
            duration: 0.7,
            scale: 0.2,
            opacity: 0,
          },
          '+=2'
        )
        .from('.idea-6 span', {
          duration: 0.8,
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
          stagger: 0.2,
        })
        .to(
          '.idea-6 span',
          {
            duration: 0.8,
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
            stagger: 0.2,
          },
          '+=1.5'
        )
        .fromTo(
          '.baloons img',
          {
            opacity: 0.9,
            y: 1400,
          },
          {
            duration: 2.5,
            opacity: 1,
            y: -1000,
            stagger: 0.2,
          }
        )
        .from(
          '.profile-picture',
          {
            duration: 0.5,
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
          },
          '-=2'
        )
        .from('.hat', {
          duration: 0.5,
          x: -100,
          y: 350,
          rotation: -180,
          opacity: 0,
        })
        .from('.wish-hbd span', {
          duration: 0.7,
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: '30deg',
          ease: Elastic.easeOut.config(1, 0.5),
          stagger: 0.1,
        })
        .fromTo(
          '.wish-hbd span',
          {
            scale: 1.4,
            rotationY: 150,
          },
          {
            duration: 0.7,
            scale: 1,
            rotationY: 0,
            color: '#ff69b4',
            ease: Expo.easeOut,
            stagger: 0.1,
          },
          'party'
        )
        .from(
          '.wish h5',
          {
            duration: 0.5,
            opacity: 0,
            y: 10,
            skewX: '-15deg',
          },
          'party'
        )
        .to('.eight svg', {
          duration: 1,
          visibility: 'visible',
          opacity: 0,
          scale: 80,
          repeat: 2,
          repeatDelay: 1,
          stagger: 0.3,
        })
        .to('.six', {
          duration: 0.5,
          opacity: 0,
          y: 30,
          zIndex: -1,
        })
        .from('.nine p', {
          duration: 1,
          ...ideaTextTrans,
          stagger: 1.2,
        })
        .to(
          '.last-smile',
          {
            duration: 0.5,
            rotation: 90,
          },
          '+=1'
        );

    }, 500); // 500ms delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="one">
        <h1 className="one">
          Holi <span id="name">Mi Amor❣️</span>
        </h1>
        <p className="two" id="greetingText">
          Mi Cielita Linda, hoy es un día muy especial❣️
        </p>
      </div>

      <div className="three">
        <p>Es tu cumpleaños❣️</p>
      </div>

      <div className="four">
        <div className="text-box">
          <p className="hbd-chatbox">
            Feliz cumpleaños bebe! Espero que este año blah blah blah blah.... 
            Te amo.. muaaaa
          </p>
          <p className="fake-btn">Enviar</p>
        </div>
      </div>

      <div className="five">
        <p className="idea-1">Yo iba a hacer eso</p>
        <p className="idea-2">Pero me detuve...</p>
        <p className="idea-3">
          Me di cuenta de que quería hacer algo<br />
          <strong>especial</strong>.
        </p>
        <p className="idea-4">Porque,</p>
        <p className="idea-5">
          Tu eres especial <span> ;) </span>
        </p>
        <p className="idea-6">
          <span>E</span>
          <span>N</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </p>
      </div>

      <div className="six">
        <img
          src={profilePicture}
          alt="profile"
          className="profile-picture"
          id="imagePath"
        />
        <img src={hatImage} alt="hat" className="hat" />
        <div className="wish">
          <h3 className="wish-hbd">Feliz Cumpleaños Mi Corazón</h3>
          <h5 id="wishText">Espero que este año esté lleno de abundancia, amor, fuerza y ​​buena salud. 
            Te deseo un muy feliz cumpleaños y que todos tus sueños se hagan realidad. 
            Eres la persona más importante para mí y me alegra verte convertirte en la persona que eres, 
            aunque solo hayan pasado dos años, siento que has recorrido un largo camino en el tiempo que te conozco</h5>
        </div>
      </div>

      <div className="seven">
        <div className="baloons">
            <img src={ballon2} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon3} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon2} alt="" />
            <img src={ballon1} alt="" />
            <img src={ballon3} alt="" />
        </div>
      </div>

      <div className="eight">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>

      <div className="nine">
        <p>Okayyy, aún no está terminado</p>
        <p id="replay" onClick={() => navigate("/timeline")}>
          tócame para más
        </p>
        <p className="last-smile" onClick={() => navigate("/timeline")}>:)</p>
      </div>
    </div>
  );
};

export default BirthdayAnimation;