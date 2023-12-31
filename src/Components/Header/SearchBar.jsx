import React from "react";
import { CloseIcon, SearchIcon } from "../Icons/index";

const SearchBar = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="search" onClick={handleOverlayClick}>
      <button className="close-btn" onClick={onClose}>
        <CloseIcon />
      </button>
      <div className="search__search_bar">
        <input type="text" placeholder="Search..." />
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
