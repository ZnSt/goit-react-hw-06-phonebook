import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { FilterSt } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <FilterSt
        type="text"
        placeholder="find contact"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
