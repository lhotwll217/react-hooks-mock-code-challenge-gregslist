import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    fetch('http://localhost:6001/listings/')
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  const searchList = listings.filter((list) => list.description.toLowerCase().includes(searchValue.toLowerCase()))

  function handleDelete(id) {
    console.log(id)
    const newListings = searchList.filter((list) => list.id !== id)
    // fetch(`http://localhost:6001/listings/${id}`, {
    //   method: "DELETE",
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    // persistDelete(id)
    setListings(newListings)
  }

  // function persistDelete(id) {
  //   fetch(`http://localhost:6001/listings/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // }




  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListingsContainer listings={searchList}
        onClickDelete={handleDelete} />
    </div>
  );
}

export default App;
