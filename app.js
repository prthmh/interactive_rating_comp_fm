const ratingBox = document.querySelector(".rating");
const thankyouBox = document.querySelector("#thank_box");
const raitngBtns = document.querySelectorAll(".num_btn");
const submitBtn = document.querySelector(".submit_btn");

let selectedRating = document.querySelector(".rating_selected");

raitngBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selectedRating.textContent = `You selected out ${e.target.textContent} of 5`;
  });
});

submitBtn.addEventListener("click", submitHandler);

function removeSelectedClass() {
  raitngBtns.forEach((btn) => btn.classList.remove("selected"));
}

function submitHandler() {
  ratingBox.style.display = "none";
  thankyouBox.classList.remove("hidden");
}
