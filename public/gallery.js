// click on gallery
const galleryItems = document.querySelectorAll(".gallery-image");

galleryItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("zoom");
  });
});
