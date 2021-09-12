// loader
const loaderWrapper = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  loaderWrapper.style.display = "none";
});

// fixed navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    document.querySelector(".navbar").classList.add("fixed");
  }
});
// screen width
const scrwidth = document.querySelector(".width");
window.addEventListener("resize", () => {
  scrwidth.innerHTML = window.innerWidth;
});

// animation on Show
const aboutMe = document.querySelector("#about-me");
aboutMe.addEventListener("show", () => {
  aboutMe.classList.add("about-me-anim");
});
