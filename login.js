const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

// Function to redirect to the "About Us" page
function redirectToAboutUs() {
  // Replace 'about.html' with the actual file path of your "About Us" page
  window.location.href = "about.html";
}

// Get references to the "Submit" buttons for both forms
const signInSubmitButton = document.querySelector(
  ".sign-in-form input[type='submit']"
);
const signUpSubmitButton = document
  .querySelectorAll(".sign-in-form")[1]
  .querySelector("input[type='submit']");

// Add click event listeners to both "Submit" buttons to redirect to the "About Us" page
signInSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  redirectToAboutUs();
});

signUpSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  redirectToAboutUs();
});
