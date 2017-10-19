import React from 'react';

const SearchBar = ({changeHandler}) => {

  return (
    <input className="search-bar" onChange={changeHandler}/>
  );
}

export default SearchBar;
