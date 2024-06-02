var urlParams = new URLSearchParams(window.location.search);
var cat = urlParams.get("cat");
let id = urlParams.get("id");
console.log(cat);
console.log(id);

const productImgMouseOverEvent = () => {
  let subImages = document.querySelectorAll(".product-images-thumbnails img");
  let mainImg = document.getElementById("product-main-img");
  // console.log(mainImg);
  subImages.forEach((img) => {
    // console.log(img);
    img.addEventListener("mousemove", () => {
      // console.log("1");
      mainImg.src = img.src;
    });
  });
};

const fetchProductData = async () => {
  const result = await fetch(`http://localhost:3000/${cat}?id=${id}`);
  let data = await result.json();
  data = data[0];
  // console.log(data);
  document.title = data.name;
  document.getElementById("product-name").innerText = data.name;
  document.getElementById("product-category").innerText = data.category;
  document.getElementById("product-price-amount").innerText = data.price;
  document.getElementById("product-about").innerText = data.description;
  document.getElementById("product-colors").innerText = data.colors;
  //IMAGES
  document.getElementById("product-main-img").src = data.imgUrl;
  let imgThumbnailContainer = document.getElementById("product-sub-images");
  let thumbnailImages = data.images;
  for (key in thumbnailImages) {
    // console.log(thumbnailImages[key]);
    let thumbnailImg = document.createElement("div");
    thumbnailImg.classList = "product-images-thumbnails";
    thumbnailImg.innerHTML = `
    <img
      src="${thumbnailImages[key]}"
      alt=""
    />
    `;
    imgThumbnailContainer.appendChild(thumbnailImg);
  }
  let addFavBtn = document.getElementById("favourite-btn");
  let addCartBtn = document.getElementById("add-to-bag-btn");
  data.cat = cat

  addFavBtn.addEventListener("click", async () => {
    const result = await fetch(`http://localhost:3000/wishlist`);
    let wishlistItems = await result.json();
    // console.log(wishlistItems);
    let flag = 0;
    wishlistItems.forEach((prod) => {
      if (JSON.stringify(prod) === JSON.stringify(data)) {
        flag=1;
      }
    });

    if(flag==0){
      fetch("http://localhost:3000/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

  });
  addCartBtn.addEventListener("click", async () => {
    const result = await fetch(`http://localhost:3000/cart`);
    let wishlistItems = await result.json();
    // console.log(wishlistItems);
    let flag = 0;
    wishlistItems.forEach((prod) => {
      if (JSON.stringify(prod) === JSON.stringify(data)) {
        flag=1;
      }
    });

    if(flag==0){
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

  });

};
fetchProductData().then(productImgMouseOverEvent);

`hasdhsjadjad"dsd "asdsad`;

let buttonEventListener = function () {
  // Carosal
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll("#carosal-btn-container button");
  const wrapper = document.querySelector(".wrapper");
  //   console.log(arrowBtns);
  const firstCard = carousel.querySelector(".card");
  // console.log(firstCard);
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
fetchData().then(buttonEventListener);
