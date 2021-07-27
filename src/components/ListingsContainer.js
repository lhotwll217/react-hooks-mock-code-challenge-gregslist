import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onClickDelete }) {
  console.log(listings)
  return (
    <main>
      <ul className="cards">
        {listings.map((list) =>

          <ListingCard onClickDelete={onClickDelete}
            key={list.id} list={list} />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
