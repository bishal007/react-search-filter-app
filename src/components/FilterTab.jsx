import React from 'react';
import useStore from '../store';

function FilterTab() {
  const { idRange, setIdRange, filterData } = useStore();

  const handleMinChange = (e) => {
    setIdRange({ ...idRange, min: parseInt(e.target.value) });
  };

  const handleMaxChange = (e) => {
    setIdRange({ ...idRange, max: parseInt(e.target.value) });
  };

  const handleFilter = () => {
    filterData();
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center">
        <span className="mr-2">ID Range:</span>
        <input
          type="number"
          value={idRange.min}
          onChange={handleMinChange}
          className="w-16 px-2 py-1 border rounded-md"
        />
        <span className="mx-2">to</span>
        <input
          type="number"
          value={idRange.max}
          onChange={handleMaxChange}
          className="w-16 px-2 py-1 border rounded-md"
        />
      </label>
      <button
        onClick={handleFilter}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default FilterTab;