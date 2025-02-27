import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage1Left from "./components/FrontPage1Left";
import FrontPage1Right from "./components/FrontPage1Right";
import FrontPage1Nav from "./components/FrontPage1Nav";
import Customer from "./components/Customer/pages/Customer"; // Import Customer page
import "./FrontPage1.css";
//can also use Outlets to render the components
// import { Outlet } from "react-router-dom";
// use link to navigate to the page without refreshing the page
// import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          exact
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
