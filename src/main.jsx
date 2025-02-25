import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage1Left from "./components/FrontPage1Left";
import FrontPage1Right from "./components/FrontPage1Right";
import FrontPage1Nav from "./components/FrontPage1Nav";
import Customer from "./components/Customer/pages/Customer.jsx"; // Import Customer page
import "./FrontPage1.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <section className="container-root">
              <FrontPage1Nav />
              <section className="left-right-seperator">
                <FrontPage1Left />
                <FrontPage1Right />
              </section>
            </section>
          }
        />

        {/* Customer Page */}
        <Route path="/Customer/Customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
