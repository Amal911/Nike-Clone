document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.interest-link');
    const interestDivs = document.querySelectorAll('.interest-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(link => link.classList.remove('active'));
            // Hide all content divs
            interestDivs.forEach(div => {
                div.classList.remove('display-content');
            });

            // Show the target div
            this.classList.add('active');
            const target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('display-content');
            
        });
    });

    const modalLinks = document.querySelectorAll('.modal-link');
    const modalLists = document.querySelectorAll('.interest-modal');

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            modalLinks.forEach(link => link.classList.remove('active'));
            // Hide all content divs
            modalLists.forEach(div => {
                div.classList.remove('display-content');
            });

            // Show the target div
            this.classList.add('active');
            const target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('display-content');
            
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll("#carosal-btn-container button");
    const wrapper = document.querySelector(".wrapper");
    //   console.log(arrowBtns);
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
  fetchData();
  