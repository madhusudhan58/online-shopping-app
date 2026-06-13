const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    category: "Mobile"
  },
  {
    id: 2,
    name: "Samsung S25",
    price: 69999,
    category: "Mobile"
  },
  {
    id: 3,
    name: "MacBook Air M1",
    price: 89999,
    category: "Laptop"
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;