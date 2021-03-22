import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__wrap'>
            <input placeholder='Фильм' className='search__input' />
            <button type='submit' className='search__submit'>Найти</button>
          </div>
        </form>
        <FilterCheckBox />
      </div>
    </section>
  );
}

export default SearchForm;
