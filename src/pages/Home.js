import React, { useEffect, useRef } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import '../styles/Home.css';
import { metaAdder } from '../helpers/metaAdder';
import RepinCV_pdf_file from '../assets/Repin_Andrei_CV.pdf';
import DownArrow from '../assets/down-arrow.png';

function Home() {

  useEffect(() => {
    document.title = 'Repin Andrei - FullStack Developer';
    metaAdder('description', "I'm Fullstack Developer with a passion of learning and creating. My main technology stack includes Python, Django, Express.js on Backend and JavaScript, React on Frontend.");
  });

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});

  return (
    <div className='home'>
      <div className='about'>
        <h2 className='about__title'>Hi, my name is Repin Andrei</h2>
        <div className='promt'>
          <p className='about__description-text'>I'm <span className='about__description-text_bold'>Fullstack Developer</span> with a passion of learning and creating.</p>

          <p className='about__description-text'>
            15+ years of general programming experience.
            <span className='about__description-text_bold'> 2+ years of JavaScript</span> web development experience. 
            <span className='about__description-text_bold'> 1+ year of Python</span> backend development experience.
          </p>

          <p className='about__description-text about__description-text_last-elaement'>My main technology stack includes Python, Django, Express.js on Backend and JavaScript, React on Frontend.</p>
          <a className='button' href={RepinCV_pdf_file} download="Repin_Andrei_CV.pdf" target='_blank' rel='noopener noreferrer'>Download CV</a>
          <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/ra404/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <a href='https://github.com/RA404' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
            <a href='mailto: repin404@gmail.com' target='_blank' rel='noopener noreferrer'>
              <EmailIcon />
            </a>
            <a href='https://telegram.me/Repin404' target='_blank' rel='noopener noreferrer'>
              <TelegramIcon />
            </a>
          </div>
        </div>
        <img className='img-down-arrow' src={DownArrow} alt='Down arrow' onClick={executeScroll}></img>
      </div>
      <div className='skills'>
        <h1 ref={myRef}>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>JavaScript, HTML, CSS, ReactJS, BEM, npm, StyledComponent, Bootstrap, TailwindCSS, MUI</span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>Python, Django, DRF, NodeJS, npm, ExpressJS, REST</span>
          </li>
          <li className='item'>
            <h2>Infrastructure and DB</h2>
            <span>Docker, Git, GitHub Actions, CI/CD, nginx, WebPack, MongoDB, MySQL, MS SQL, Postgresql</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home