const carouselEl = document.querySelector("[data-carousel]");
const carouselPreviousEl = document.querySelector("[data-carousel-previous]");
const carouselNextEl = document.querySelector("[data-carousel-next]");

carouselPreviousEl.addEventListener("click", (evt) => {
  carouselEl.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

carouselNextEl.addEventListener("click", (evt) => {
  carouselEl.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});
