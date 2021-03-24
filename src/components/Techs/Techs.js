import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='title'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__paragraph'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          <a
            href='https://developer.mozilla.org/ru/docs/Web/HTML'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>HTML</p>
            </li>
          </a>
          <a
            href='https://developer.mozilla.org/ru/docs/Web/css'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>CSS</p>
            </li>
          </a>
          <a
            href='https://developer.mozilla.org/ru/docs/Learn/JavaScript'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>JS</p>
            </li>
          </a>
          <a
            href='https://ru.reactjs.org/docs/getting-started.html'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>React</p>
            </li>
          </a>
          <a
            href='https://docs.github.com/en'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>Git</p>
            </li>
          </a>
          <a
            href='https://expressjs.com/ru/'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>Express.js</p>
            </li>
          </a>
          <a
            href='https://www.mongodb.com/3'
            className='techs__list-link'
            target='_blank'
            rel='noreferrer'
          >
            <li className='techs__list-item'>
              <p className='techs__item-title'>mongoDB</p>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
