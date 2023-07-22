// Get references to elements
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail = document.getElementsByClassName("thumbnail");
let hero = document.getElementsByClassName("hero")[0];

// Array of background images
let backgroundImg = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpeg",
];

// Initialize index variable
let i = 0;

// Function to handle the "Next" button click
next.addEventListener("click", function () {
  // Check if the current index is less than 4 (the maximum index of the array)
  if (i < 4) {
    // Update the background image of the hero with the next image in the array
    hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';

    // Add the "active" class to the next thumbnail
    thumbnail[i + 1].classList.add("active");

    // Remove the "active" class from the current thumbnail
    thumbnail[i].classList.remove("active");

    // Increment the index to move to the next image
    i++;
  }
});

// Function to handle the "Previous" button click
prev.addEventListener("click", function () {
  // Check if the current index is greater than 0 (the minimum index of the array)
  if (i > 0) {
    // Update the background image of the hero with the previous image in the array
    hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';

    // Add the "active" class to the previous thumbnail
    thumbnail[i - 1].classList.add("active");

    // Remove the "active" class from the current thumbnail
    thumbnail[i].classList.remove("active");

    // Decrement the index to move to the previous image
    i--;
  }
});
