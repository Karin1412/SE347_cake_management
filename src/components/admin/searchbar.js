import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center border-b border-[#69432B] py-2 justify-end">
      <input
        className="appearance-none bg-transparent border-none w-full text-[#69432B] mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="flex-shrink-0 bg-[#69432B] hover:bg-orange-950 text-sm text-white py-1 px-2 rounded"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
