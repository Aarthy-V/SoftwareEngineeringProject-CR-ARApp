import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import '../Styles/SearchBar.css';

function SearchBar({ onSearch,name }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Main search Term",searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar">
      <button type="submit" className="search-button">
          <FiSearch className="search-icon" />
        </button>
        <input
          type="text"
          placeholder={name}
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default SearchBar;
