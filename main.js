// const input = document.querySelectorAll("input");
// const form = document.querySelector("form");

// form.addEventListener("click", (evt) => {
//   evt.preventDefault();

//   input.forEach((num) => {
//     if (num.value != " ") {
//       input.classList.toggle("true");
//     }
//   });
// });

document.querySelector(".footer__logo").addEventListener("click", (evt) => {
  evt.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});
