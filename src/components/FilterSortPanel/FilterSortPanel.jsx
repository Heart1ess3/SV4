import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSortOrder } from '../../features/stadiumsSlice';

const FilterSortPanel = () => {
  const dispatch = useDispatch();
  
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter resorts"
        onChange={handleFilterChange}
      />
      <select onChange={handleSortChange}>
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>
    </div>
  );
};

export default FilterSortPanel;