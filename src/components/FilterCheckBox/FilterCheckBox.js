import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox({ isShort, handleUpdateCheckbox }) {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          checked={isShort}
          onChange={handleUpdateCheckbox}
        />
        <span className='filter-checkbox__round' />
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckBox;
