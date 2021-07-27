import React, { useState } from "react";

function ListingCard({ list, onClickDelete }) {
  const { "id": id,
    "description": description,
    "image": image,
    "location": location } = list

  const [clicked, setClicked] = useState(false)
  function favBtn() {
    setClicked(!clicked)
  }
  const [clickDelete, setClickDelete] = useState(false)

  function deleteBtn(id) {
    /*  setClickDelete(!clickDelete) */
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })

    onClickDelete(id)
  }



  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div
        className="details">
        {clicked ? (
          <button onClick={favBtn} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favBtn} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span>{location}</span>
        <button
          onClick={() => deleteBtn(id)}
          className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
