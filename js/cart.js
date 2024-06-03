const deleteCartListener = () => {
  deleteBtns = document.getElementsByClassName("cart-delete-btn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
    //   let productId = 7;
      let productId = deleteBtns[i].dataset.id;
      fetch(`http://localhost:3000/cart/${productId}`, {
        method: "DELETE",
      });
    });
  }
};

const fetchCartData = async () => {
    let subtotal = 0;
  const result = await fetch("http://localhost:3000/cart");
  let data = await result.json();
  // console.log(userData);
  const cartContainer = document.getElementById("cart-items-container");
  data.forEach((product, index) => {
    // console.log(product);
    subtotal += product.price;
    console.log(index);
    let productCard = document.createElement("div");
    productCard.className = "product-card d-flex justify-content-between ";
    productCard.innerHTML = `
      <div class="d-flex">
                <a href="../pages/product.html?cat=${product.cat}&id=${product.id}">
                <div>
                  <img
                    class="cart-product-img"
                    src="${product.imgUrl}"
                    alt=""
                  />
                </div>
                </a>
                <div class="product-details d-flex flex-column justify-content-between">
                  <div>
                    <a href="../pages/product.html?cat=${product.cat}&id=${product.id}">
                    <p class="product-name">${product.name}</p>
                    </a>
                    <p class="product-category">${product.category}</p>
                    <p class="product-color">${product.color}</p>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <p class="my-auto">Size</p>
                      <select class="product-size" name="size" id="">
                        <option value="">6</option>
                        <option value="">6.5</option>
                        <option value="">7</option>
                        <option value="">7.5</option>
                        <option value="">8</option>
                        <option value="">8.5</option>
                        <option value="">9</option>
                        <option value="">9.5</option>
                        <option value="">10</option>
                        <option value="">10.5</option>
                      </select>
                      <p class="my-auto">Quantity</p>
                      <select class="product-quantity" name="quantity" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex gap-4">
                  <a data-id = ${product.id} class="cart-fav-btn">

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      role="img"
                      width="24px"
                      height="24px"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                      ></path>
                    </svg>
                    </a>
                    <a data-id = ${product.id} class="cart-delete-btn">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      role="img"
                      width="24px"
                      height="24px"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                        d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                      ></path>
                    </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p class="product-price">MRP: ₹ ${product.price}</p>
                </div>
              </div>
          `;
    cartContainer.appendChild(productCard);
    
    cartContainer.appendChild(document.createElement('hr'));

  });
  document.getElementById('subtotal-amount').innerHTML=subtotal;
  document.getElementById('total-amount').innerHTML=subtotal+1250;
  document.getElementById('total-amount2').innerHTML=subtotal+1250;
  document.getElementById('no-products').innerHTML=data.length;
};

fetchCartData().then(deleteCartListener);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll("#carosal-btn-container button");
  const wrapper = document.querySelector(".wrapper");
  console.log(arrowBtns);
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

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  // wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});
