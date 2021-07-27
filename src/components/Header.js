import React from "react";
import Search from "./Search";

function Header({ searchValue, setSearchValue }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
}

export default Header;
