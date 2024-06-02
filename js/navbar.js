
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
// const navDropSection = document.querySelector(".nav-drop");


window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
 
  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = "-66px";
  } else {
    // Scroll up
    navbar.style.top = "0";
    
  }
  lastScrollTop = scrollTop;
});


//function for displaying and hidding nav bar dropdowns

document.addEventListener("DOMContentLoaded", () => {
  const featurehoverLink = document.getElementById("featureDropDown");
  const featurehoverSection = document.getElementById("NewAndFeatured-drop");

  const menhoverLink = document.getElementById("menDropDown");
  const menhoverSection = document.getElementById("men-drop");

  const womenhoverLink = document.getElementById("womenDropDown");
  const womenhoverSection = document.getElementById("women-drop");

  const kidshoverLink = document.getElementById("kidsDropDown");
  const kidshoverSection = document.getElementById("kids-drop");

  const saleshoverLink = document.getElementById("salesDropDown");
  const saleshoverSection = document.getElementById("sales-drop");

  featurehoverLink.addEventListener("mouseenter", () => {
    featurehoverSection.classList.remove("main-opt");
  });
  featurehoverLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!featurehoverSection.matches(":hover")) {
        featurehoverSection.classList.add("main-opt");
      }
    }, 100);
  });
  featurehoverSection.addEventListener("mouseleave", () => {
    featurehoverSection.classList.add("main-opt");
  });
  featurehoverSection.addEventListener("mouseenter", () => {
    featurehoverSection.classList.remove("main-opt");
  });

  menhoverLink.addEventListener("mouseenter", () => {
    menhoverSection.classList.remove("main-opt");
  });
  menhoverLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menhoverSection.matches(":hover")) {
        menhoverSection.classList.add("main-opt");
      }
    }, 100);
  });
  menhoverSection.addEventListener("mouseleave", () => {
    menhoverSection.classList.add("main-opt");
  });
  menhoverSection.addEventListener("mouseenter", () => {
    menhoverSection.classList.remove("main-opt");
  });

  womenhoverLink.addEventListener("mouseenter", () => {
    womenhoverSection.classList.remove("main-opt");
  });
  womenhoverLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!womenhoverSection.matches(":hover")) {
        womenhoverSection.classList.add("main-opt");
      }
    }, 100);
  });
  womenhoverSection.addEventListener("mouseleave", () => {
    womenhoverSection.classList.add("main-opt");
  });
  womenhoverSection.addEventListener("mouseenter", () => {
    womenhoverSection.classList.remove("main-opt");
  });

  kidshoverLink.addEventListener("mouseenter", () => {
    kidshoverSection.classList.remove("main-opt");
  });
  kidshoverLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!kidshoverSection.matches(":hover")) {
        kidshoverSection.classList.add("main-opt");
      }
    }, 100);
  });
  kidshoverSection.addEventListener("mouseleave", () => {
    kidshoverSection.classList.add("main-opt");
  });
  kidshoverSection.addEventListener("mouseenter", () => {
    kidshoverSection.classList.remove("main-opt");
  });

  saleshoverLink.addEventListener("mouseenter", () => {
    saleshoverSection.classList.remove("main-opt");
  });
  saleshoverLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!saleshoverSection.matches(":hover")) {
        saleshoverSection.classList.add("main-opt");
      }
    }, 100);
  });
  saleshoverSection.addEventListener("mouseleave", () => {
    saleshoverSection.classList.add("main-opt");
  });
  saleshoverSection.addEventListener("mouseenter", () => {
    saleshoverSection.classList.remove("main-opt");
  });
});
