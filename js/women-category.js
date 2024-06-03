const fetchData = async (categ) => {
  const result = await fetch("http://localhost:3000/mens-category");
  let data = await result.json();
  return data[categ];
};

const addButtonEventListener = function () {
  const carousels = document.querySelectorAll(".carousel-with-btn");
  console.log(carousels);
  carousels.forEach((carousel) => {
    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;
    console.log(carousel.id);
    let carouselSection = document.getElementById(carousel.id);
    let carouselType = carousel.dataset.carouselType;
    console.log(carouselType);
    const arrowBtns = document.querySelectorAll(
      `#${carouselType} #carosal-btn-container button`
    );
    console.log(arrowBtns);
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

      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      if (
        newScrollLeft <= 0 ||
        newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
      ) {
        isDragging = false;
        return;
      }

      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };


    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carouselSection.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });
  });
};

const loadData = async function () {
  let data = await fetchData("popular-right-now");
  let carousel = document.getElementById("popular-right-now-carousel");
  data.forEach((product) => {
    let productCard = document.createElement("li");

    productCard.className = "card";
    productCard.innerHTML = `
    <div class="find-fav-product-card">
    <img
      class="find-fav-product-image"
      src="${product.imgUrl}"
      alt=""
    />
    <div class="texts text-dark">
      <p><b>${product.name}</b></p>
      <p>${product.category}</p>
      <p><b>MRP: ₹ ${product.price}</b></p>
    </div>
</div>
        `;
    carousel.appendChild(productCard);
  });

  
};

loadData().then(addButtonEventListener);

