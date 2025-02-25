import "../pages/Customer.css";
import React, { useState } from "react";
import PCart from "./PCart";

const CustomerNav = ({ setSearch, cart }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDiv, setshowDiv] = useState(false);

  const listClick = () => {
    setshowDiv((prev) => !prev);
    console.log("cart");
    for (const [p_id, cnt] of Object.entries(cart)) {
      console.log(`key : ${p_id} , count ${cnt}`);
    }
  };

  return (
    <>
      <nav className="nav-container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            name="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            id="search-button"
            className="btn btn-outline-success"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSearch(inputValue.trim().toLowerCase());
            }}
          >
            Search
          </button>
        </form>

        <button
          onClick={() => listClick()}
          id="list-button"
          className="btn btn-outline-success"
        >
          List
        </button>
      </nav>

      {showDiv && (
        <div id="productscart">
          <PCart cart={cart} />
        </div>
      )}
    </>
  );
};

export default CustomerNav;
