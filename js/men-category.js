
const fetchData = async (categ) => {
  const result = await fetch("http://localhost:3000/mens-category");
  let data = await result.json();
  console.log(data["popular-right-now"]);
  return data;
};

document.addEventListener("DOMContentLoaded",async function  () {
  let data = await fetchData("popular-right-now");
  let carousel = document.getElementById("popular-right-now");
  data.forEach((product) => {
    // console.log(product);
    let productCard = document.createElement("li");
    productCard.className = "card ";
    productCard.innerHTML = `
    <div class="find-fav-product-card">
    <img
      class="find-fav-product-image"
      src="${data.imgUrl}"
      alt=""
    />
    <div class="texts text-dark">
      <p><b>${data.name}</b></p>
      <p>${data.category}</p>
      <p><b>${data.price}</b></p>
    </div>
</div>
        `;
    carousel.appendChild(productCard);
  });



  data = await fetchData("popular-right-now");
  carousel = document.getElementById("popular-right-now");
  data.forEach((product) => {
    // console.log(product);
    let productCard = document.createElement("li");
    productCard.className = "card ";
    productCard.innerHTML = `
    <div class="find-fav-product-card">
    <img
      class="find-fav-product-image"
      src="${data.imgUrl}"
      alt=""
    />
    <div class="texts text-dark">
      <p><b>${data.name}</b></p>
      <p>${data.category}</p>
      <p><b>${data.price}</b></p>
    </div>
</div>
        `;
    carousel.appendChild(productCard);
  });


  data = await   fetchData("popular-right-now");
  carousel = document.getElementById("popular-right-now");
  data.forEach((product) => {
    // console.log(product);
    let productCard = document.createElement("li");
    productCard.className = "card ";
    productCard.innerHTML = `
    
        `;
    carousel.appendChild(productCard);
  });
}).then(addButtonEventListener);

// fetchData("popular-right-now");
// fetchData('shop-by-icon');
// fetchData('shop-by-sport');


let addButtonEventListener =  function () {
  const carousels = document.querySelectorAll(".carousel");
  console.log(carousels);
  //   const arrowBtns = document.querySelectorAll("#carosal-btn-container button");
  //   const wrapper = document.querySelector(".wrapper");
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

    //   const autoPlay = () => {
    //     // Return if window is smaller than 800
    //     if (window.innerWidth < 800) return;

    //     // Calculate the total width of all cards
    //     const totalCardWidth = carousel.scrollWidth;

    //     // Calculate the maximum scroll position
    //     const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    //     // If the carousel is at the end, stop autoplay
    //     if (carousel.scrollLeft >= maxScrollLeft) return;

    //     // Autoplay the carousel after every 2500ms
    //     timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
    //   };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    //   wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    // wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carouselSection.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });
  });
};
