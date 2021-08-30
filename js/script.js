// loader
const loaderWrapper = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  loaderWrapper.style.display = "none";
});

// fixed navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    document.querySelector(".navbar").classList.add("fixed");
  } else {
    document.querySelector(".navbar").classList.remove("fixed");
  }
});
