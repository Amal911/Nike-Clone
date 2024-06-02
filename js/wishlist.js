const addButtonListener =  function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll("#carosal-btn-container button");
  const wrapper = document.querySelector(".wrapper");
  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
};

const fetchData = async () => {
  const result = await fetch("http://localhost:3000/favourites");
  let data = await result.json();
  // console.log(userData);
  let carousel = document.getElementById("fav-carousel");
  data.forEach((product) => {
    // console.log(product);
    let productCard = document.createElement("li");
    productCard.className = "card carousel-card";
    productCard.innerHTML = `
        <div class="find-fav-product-card">
            <div>
              <img
                class="find-fav-product-image"
                src="${product.imgUrl}"
                alt=""
              />
            </div>
            <div class="find-next-fav-product-description">
              <div>
                <p class="find-next-fav-product-name">${product.name}</p>
                <p class="find-next-fav-product-category">${product.category}</p>
              </div>
              <p class="find-next-fav-product-price">${product.price}</p>
            </div>
          </div>
        `;
    carousel.appendChild(productCard);
  });
};


fetchData().then(addButtonListener);
