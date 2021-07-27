import React, { useState } from "react";



function Search({ searchValue, setSearchValue }) {

  function handleSubmit(e) {
    e.preventDefault()
  }
  console.log(searchValue)
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
