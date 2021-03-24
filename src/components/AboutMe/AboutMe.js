import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/me-mirror.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Виктор</h3>
          <p className='about-me__job'>Начинающий Веб-разработчик, 31 год</p>
          <p className='about-me__description'>
            Я родился и живу в Тюмени. Но в любой момент готов переехать туда,
            где потеплее. Более 10 лет работал в продажах. Сейчас ушёл с
            постоянной работы и занимаюсь тем, что действительно нравится.
          </p>
          <div className='about-me__contacts'>
            <a
              href='https://vk.com/viktor_komlev/'
              className='about-me__contact-link'
              target='_blank'
              rel='noreferrer'
            >
              Vkontakte
            </a>
            <a
              href='https://github.com/LOOKATmixer'
              className='about-me__contact-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </div>
        <img src={myPhoto} alt='моя фотография' className='about-me__image' />
      </div>
    </section>
  );
}

export default AboutMe;
