import React, { useState } from "react";
import CustomerNav from "../components/CustomerNav";
import Carousel from "../components/Carousel.jsx";
import "./Customer.css";
import Categories from "../components/Categories.jsx";
import SearchComponent from "../components/SearchComponent.jsx";
import ProductsCart from "../components/PCart.jsx";
const Customer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState({});

  return (
    <>
      <CustomerNav setSearch={setSearchQuery} cart={cart} />
      <section className="container">
        <SearchComponent
          searchQuery={searchQuery}
          cart={cart}
          setCart={setCart}
        />
        <section className="customer-body">
          <Carousel />
          <Categories />
        </section>
      </section>
      \
    </>
  );
};

export default Customer;
