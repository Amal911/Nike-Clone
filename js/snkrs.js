// toggle the view between grid and feed
const initialImage = "../assets/images/snkrs/grid.svg";
const newImage = "../assets/images/snkrs/feed.svg";

const myImg = document.getElementById("toggle");
myImg.addEventListener("click", () => {
  if (myImg.dataset.logo == "feed") {
    myImg.src = newImage;
    myImg.dataset.logo = "grid";
    document.getElementById("feed-container").style.display = "none";
    document.getElementById("grid-container").style.display = "flex";
  } else {
    myImg.src = initialImage;
    myImg.dataset.logo = "feed";
    document.getElementById("feed-container").style.display = "flex";
    document.getElementById("grid-container").style.display = "none";
  }
});

// To change the tabs in the header
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      // Remove the active class from all links
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // Add the active class to the clicked link
      link.classList.add("active");
    });
  });
});

// To open and close the footer headings
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".menu-heading");

  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
