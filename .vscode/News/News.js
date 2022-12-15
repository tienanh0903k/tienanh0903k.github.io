var imgs = document.querySelectorAll(".news_img");
imgs.forEach((e) => {
  e.addEventListener("mouseover", (ele) => {
    e.style.transition = "1s ease";
    e.style.transform = "scale(1.09)";
  });
  e.addEventListener("mouseout", (ele) => {
    e.style.transition = "1s ease";
    e.style.transform = "scale(1)";
  });
});
