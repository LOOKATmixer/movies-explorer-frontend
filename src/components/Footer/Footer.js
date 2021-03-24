import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <h3 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className='footer__container'>
        <p className='footer__copyright'>&#169; 2021</p>

        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <a
                href='https://praktikum.yandex.ru/'
                className='footer__nav-link'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__nav-item'>
              <a
                href='https://github.com/yandex-praktikum'
                className='footer__nav-link'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li className='footer__nav-item'>
              <a
                href='https://www.facebook.com/yandex.praktikum'
                className='footer__nav-link'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
