import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm({ handleSeachMovie }) {
  const [searchString, setSearchString] = useState('');

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSeachMovie(searchString);
  };

  return (
    <section className='search'>
      <div className='search__container'>
        <form onSubmit={handleSubmit} className='search__form'>
          <div className='search__wrap'>
            <input
              value={searchString}
              onChange={onChangeSearch}
              placeholder='Фильм'
              className='search__input'
              required
            />
            <button type='submit' className='search__submit'>
              Найти
            </button>
          </div>
        </form>
        <FilterCheckBox />
      </div>
    </section>
  );
}

export default SearchForm;
