import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" />
        <span className="filter-checkbox__round" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
};

export default FilterCheckBox;