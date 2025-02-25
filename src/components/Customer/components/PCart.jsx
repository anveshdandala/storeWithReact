import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Papa from "papaparse";
import "../pages/Customer.css";

const TAX_RATE = 0.08; // 8% tax rate

const PCart = ({ cart }) => {
  const [products, setProducts] = useState([]);

  // Fetch CSV and parse it
  useEffect(() => {
    fetch("/DMartWithLocation.csv") // Ensure the file is accessible in public/
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          dynamicTyping: true,
          complete: (result) => setProducts(result.data),
        });
      });
  }, []);

  // Match cart items with product details
  const cartItems = products
    .filter((product) => cart[product.p_id]) // Find products that exist in the cart
    .map((product) => ({
      ...product,
      quantity: cart[product.p_id], // Add quantity from cart
    }));

  // Calculate total prices
  const invoiceSubtotal = cartItems.reduce(
    (sum, item) => sum + item.DiscountedPrice * item.quantity,
    0
  );
  const invoiceTaxes = invoiceSubtotal * TAX_RATE;
  const invoiceTotal = invoiceSubtotal + invoiceTaxes;

  if (cartItems.length === 0) {
    return <p>No items in the cart</p>;
  }

  return (
    <TableContainer id="cart-container" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Product Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.p_id}>
              <TableCell>{item.Name}</TableCell>
              <TableCell>{item.Brand}</TableCell>
              <TableCell>{item.Category}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">
                ₹{item.DiscountedPrice * item.quantity}
              </TableCell>
              <TableCell align="right">{item.address}</TableCell>
            </TableRow>
          ))}
          <div className="cart-lower">
            <Button variant="outlined">Print</Button>
            <div className="cart-total">
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={3}>Subtotal</TableCell>
                <TableCell align="right">₹{invoiceSubtotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">₹{invoiceTaxes}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell align="right">₹{invoiceTotal}</TableCell>
              </TableRow>
            </div>
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PCart;
