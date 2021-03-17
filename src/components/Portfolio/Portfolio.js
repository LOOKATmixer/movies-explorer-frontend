import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__projects'>
        <li className='portfolio__project'>
          <a
            href='https://lookatmixer.github.io/how-to-learn/'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <svg
              className="portfolio__icon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li className='portfolio__project'>
          <a
            href='https://lookatmixer.github.io/russian-travel/'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <svg
              className="portfolio__icon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li className='portfolio__project'>
          <a
            href='https://mixer.students.nomoreparties.space/sign-in'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <svg
              className="portfolio__icon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
