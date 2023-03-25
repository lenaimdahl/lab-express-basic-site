const express = require("express");
const app = express();

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("zoom");
  });
});
