import React from "react";

interface SearchbarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearchTerm }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbox">
      <input type="text" id="main-inp" onChange={handleSearch} />
      <button id="search-btn" className="butt">
        <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="" id="search-img" />
      </button>
    </div>
  );
};

export default Searchbar;
