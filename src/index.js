console.log("Hellow world");

const btn = document.querySelector("#submit");
const rate = document.querySelector("#rating");
const thankYou = document.querySelector("#thankYou");
const ratingText = document.querySelector("#rating-text");
let ratingNumber = 0;

document.addEventListener("click", (e) => {
  if (e.target.className === "component__rating__number") {
    ratingNumber = +e.target.innerHTML;
  }
});

if (btn) {
  btn.addEventListener("click", () => {
    rate.classList.add("hide");
    thankYou.classList.remove("hide");
    ratingText.innerHTML = `You selected ${ratingNumber} out of 5`;
    thankYou.classList.toggle("show");
  });
}
