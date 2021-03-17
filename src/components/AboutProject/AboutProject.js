import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='title'>О проекте</h2>
      <div className='about__container'>
        <div className='about__info'>
          <h3 className='about__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__info'>
          <h3 className='about__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about__container'>
        <div className='about__duration'>
          <h4 className='about__duration-title'>1 неделя</h4>
          <p className='about__duration-description'>Back-end</p>
        </div>

        <div className='about__duration'>
          <h4 className='about__duration-title about__duration-title_type_light'>
            4 недели
          </h4>
          <p className='about__duration-description'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
