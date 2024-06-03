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





const addButtonListener= function () {
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
  fetchData().then(addButtonListener);

  

let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));
let showingmail = document.getElementById('disp')
let checkcred = () => {
    if (!sessionStorage.getItem("user-creds")) {

        console.log("checkred exception on case occured login again ");
        // change showingmail with your output tag id
        showingmail.innerHTML = `${UserInfo.FirstName} ${UserInfo.LastName}`;
    }
    else {
      console.log("login cred info fethched");

        showingmail.innerHTML = `${UserInfo.FirstName} ${UserInfo.LastName}`;

    }
}
window.addEventListener('load', checkcred);
  