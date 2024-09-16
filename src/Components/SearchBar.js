import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-4 hover:scale-105 transition ease-out duration-300">
      <input
        type="text"
        className="w-1/2 p-2 border border-gray-300 rounded-l"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition"
      >
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchBar;
