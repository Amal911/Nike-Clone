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

// Shuffle the fetched data
let shoesData;
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// To fetch the data from api
const fetchData = async (category) => {
  const result = await fetch(`http://localhost:3000/${category}`);
  const data = await result.json();
  shoesData = shuffleArray(data);
  feed(shoesData);
};

// load the feed container
let category = "snkrs";
const loadFeedCard = (cardData) => {
  const feedContainer = document.getElementById("feed-container");
  deleteChild(feedContainer);

  cardData.forEach((card) => {
    let feedCard = document.createElement("div");
    feedCard.innerHTML = `
    <a href="./snkrs-product-page.html?cat=${category}&id=${card.id}">
      <div class="card feed-card card-hover mb-4" style="width: 18rem">
          <img src="${
            card.cardImage
          }" class="card-img-top" alt="feedCardImage"/>

          <div class="card-body card-title-p d-flex align-items-center flex-column">
            <p>${card.top_name}</p>
            <h3>${card.bottom_name}</h3>
          </div>
          ${
            card.status === "Buy"
              ? `<div class="hover-button">
                  <a href="" class="button text-white">${card.status}</a>
                </div>`
              : `<div class="hover-button">
                  <a href="" class="button-so text-white">${card.status}</a>
                </div>`
          }
        </div>      
      </a>
    `;
    feedContainer.appendChild(feedCard);
  });
};

// load the grid container
const loadGridCard = (cardData) => {
  const gridContainer = document.getElementById("grid-container");
  deleteChild(gridContainer);

  cardData.forEach((card) => {
    let gridCard = document.createElement("div");
    gridCard.innerHTML = `
    <a href="snkrs-product-page.html">
      <div class="card grid-card card-hover" style="width: 18rem">
          <img
            src="${card.cardImage}"
            class="card-img-top"
            alt="gridCardImage"
          />
        </div>
      </a>
    `;
    gridContainer.appendChild(gridCard);
  });
};

// To delete the child from feed and grid container
const deleteChild = (container) => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
};

// filter data for In Stock and Upcoming
const filterData = (datas, status) => {
  let filterData = datas.filter((data) => data.status == status);
  return filterData;
};

// switching between header tabs
const feed = async () => {
  loadFeedCard(shoesData);
  loadGridCard(shoesData);
};
const inStock = async () => {
  feedData = filterData(shoesData, "Buy");
  loadFeedCard(feedData);
  loadGridCard(feedData);
};
const upcomming = async () => {
  feedData = filterData(shoesData, "Upcoming");
  loadFeedCard(feedData);
  loadGridCard(feedData);
};

fetchData(category);

const navBtns = document.getElementsByClassName("nav-link");

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", () => {
    tab = navBtns[i].innerHTML;
    if (tab == "Feed") {
      feed();
    } else if (tab == "In Stock") {
      inStock();
    } else if (tab == "Upcoming") {
      upcomming();
    }
  });
}
