const button = document.querySelector("button");
const modal = document.querySelector(".modal");

button.addEventListener("click", () => modal.classList.add("dismiss"));

const square = document.querySelectorAll(".square");
square.forEach((el) => {
  el.addEventListener("click", function () {
    let rgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    el.style.background = rgb;
    el.classList.add("color");
  });
});
