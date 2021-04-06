import React, { useState, useCallback } from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useDebouncedCallback } from 'use-debounce';

const DEBOUNCE_DELAY = 1000;

function SearchForm({ handleSeachMovie, link }) {
  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const debouncedSetFilter = useDebouncedCallback(
    (value, checked) => {
        handleSeachMovie(value, checked);
    }, DEBOUNCE_DELAY
  );

  const onChangeSearch = useCallback((value, checked) => {
    setSearchString(value);
    debouncedSetFilter(value, checked);
  }, [debouncedSetFilter]);

  const handleSubmit = e => {
    e.preventDefault();
    handleSeachMovie(searchString, isShort);
  }

  const handleUpdateCheckbox = () => {
    const invertedValue = !isShort;
    setIsShort(invertedValue);
    onChangeSearch(searchString, invertedValue);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form onSubmit={handleSubmit} className='search__form'>
          <div className='search__wrap'>
            <input
              value={searchString}
              onChange={({ target: { value } }) =>
                onChangeSearch(value, isShort)
              }
              placeholder={link === 'movies' ? 'Фильмы' : 'Сохранённые фильмы'}
              className='search__input'
              required
              minLength='1'
            />
            <button type='submit' className='search__submit'>
              Найти
            </button>
          </div>
        </form>
        <FilterCheckBox
          isShort={isShort}
          handleUpdateCheckbox={handleUpdateCheckbox}
        />
      </div>
    </section>
  );
}

export default SearchForm;
