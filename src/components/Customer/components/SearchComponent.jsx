import React, { useEffect, useState } from "react";
import { searchingCsv, searchingCsv2 } from "../utils/searchFunction.js";
import "../pages/Customer.css";

function SearchComponent({ searchQuery, cart, setCart }) {
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [searchQuery, isOpen]);

  async function handleSearch(searchData) {
    try {
      const response1 = await searchingCsv(searchData);
      const response2 = await searchingCsv2(searchData);
      const combinedResponses = [...response1, ...response2];

      // Sort results based on count
      const sortedCombinedResponses = combinedResponses.sort(
        (a, b) => b.cnt - a.cnt
      );

      console.log("Final Results:", sortedCombinedResponses);
      setResults(sortedCombinedResponses);
    } catch (e) {
      console.error("Error fetching search results:", e);
      setResults([]);
    }
  }
  const handleClose = () => {
    setIsOpen(false);
    setResults([]); // Clear results when closed
  };
  return isOpen ? (
    <div id="search-close-flex">
      <button className="closeButton" onClick={handleClose}>
        X
      </button>
      <ul className="search-container">
        {results.length > 0
          ? results.map((item, index) => (
              <ListItem key={index} item={item} cart={cart} setCart={setCart} />
            ))
          : ""}
      </ul>
    </div>
  ) : null;
}

// List Item Component
const ListItem = ({ item, cart, setCart }) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };
  const handleDecrement = (productId) => {
    setCart((pc) => ({
      ...pc,
      [productId]: Math.max((pc[productId] || 0) - 1, 0),
    }));
  };
  const handleIncrement = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  return (
    <li
      id="li-each-card"
      className="list-none bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-4"
    >
      <div
        id="card-area"
        className="p-4 flex justify-between items-start gap-4"
      >
        {/* Product Information */}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {item.row?.product_name || ""}
            {typeof item.row?.Name === "string"
              ? item.row.Name.slice(0, 30)
              : ""}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {item.row?.Description
              ? `${item.row.Description.slice(0, 40)}...`
              : ""}
          </p>
          <div className="space-y-1">
            <p className="text-gray-900">
              <span className="font-medium">Price: </span>
              <span className="text-emerald-600">
                {item.row?.Price || ""} {item.row?.actual_price || ""}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-medium">Location: </span>
              Will be updated soon
            </p>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center">
          {!showDiv ? (
            <button
              onClick={handleClick}
              id="cart-button"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l3.6 9.59a2 2 0 001.8 1.41h7.72a2 2 0 001.8-1.1L21 7H7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21a1 1 0 100-2 1 1 0 000 2zM8 21a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              <span>Add</span>
            </button>
          ) : (
            <div
              id="add-flex"
              className="flex items-center bg-gray-100 rounded-lg p-1"
            >
              <button
                id="but1"
                onClick={() => handleDecrement(item.row.p_id)}
                className="p-1 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-medium text-gray-900">
                {cart[item.row.p_id] || 0}
              </span>
              <button
                id="but2"
                onClick={() => handleIncrement(item.row.p_id)}
                className="p-1 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default SearchComponent;
