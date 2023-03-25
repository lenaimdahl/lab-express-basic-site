//Rampriya Karthick and Lena Imdahl worked together

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

// click on gallery
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("zoom");
  });
});
