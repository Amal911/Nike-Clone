document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".footer-heading");

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {
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

const addButtonListener = function () {
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
};


const fetchData = async () => {
  const result = await fetch("http://localhost:3000/featured-nikestyle");
  let data = await result.json();
  // console.log(userData);
  let carousel = document.getElementById("nikestyle-carousel-ul");
  data.forEach((product) => {
    // console.log(product);
    let productCard = document.createElement("li");
    productCard.className = "card carousel-card";
    productCard.innerHTML = `
          <div class="nikestyle-carousel-card">
                <p class="info">Nike By You</p>
                <svg id="customise-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 18"><defs><clipPath id="badge-iconclip-path" transform="translate(-1056 -277.8489)"><path d="M1065.02,280H1058a1,1,0,0,0-1,1v14a1,1,0,0,0,1,1h14.0029a1,1,0,0,0,1-1v-7.0111a1,1,0,0,0-2,0V295l1-1H1058l1,1V281l-1,1h7.02a1,1,0,0,0,0-2Z" fill="none"></path></clipPath><clipPath id="badge-iconclip-path-2" transform="translate(-1056 -277.8489)"><rect width="1440" height="2259" fill="none"></rect></clipPath><clipPath id="badge-iconclip-path-3" transform="translate(-1056 -277.8489)"><rect x="1056" y="279" width="20" height="21" fill="none"></rect></clipPath></defs><g id="Layer_2" dataname="Layer 2"><g id="Layer_1-2" dataname="Layer 1"><g clip-path="url(#badge-iconclip-path)"><g clip-path="url(#badge-iconclip-path-2)"><g clip-path="url(#badge-iconclip-path-3)"><image width="18" height="18" transform="translate(0 0)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAACi0lEQVQ4T62UPY4kRRCFv4jM+ununZFWI3CQwAEPE27BBeAcOFwEgxvgcAY8LrDeeoswQILVzkx3/WRGBEZmzywGWKSUSlWq8qsX70WlRAT/18g//PRFFBF20TZV2URZRVk0sWpiEaX4iWJHih2pdqD6gWoT5hMWI798/a3kHA4ogROAh1AJkgSJQGjKIwSP1GfGPGMxYDFiPjZlYwTCFRh4OAbUEDRAAhAIlIiE+4D5iMeI+4T5P2COIEivOwIMoUSQw1G07yseGY8Gqz5RvZf5PkwRtAkAh1DBQthRUlw/kjAfqD632X0zm7AYGmxyJ4s0jyRQaacN2ETJ6u05Bsxnih0o1sKofuhldtgchoUwiFCuwG56EeXsCRKYT+z1BXu9Za83HTZ173KDHdxxAQuhijOJMoUy9P67aAJgrzcs5Y6l3LHXE+ZzDyITkZ6VRcA1UxPBRDi5cnQD4PV04t3yCe+Wj9nrbe+tgYhEhBI9pHzoB/5tfLY98t2bH//znevIB7enJMVpzleQDXgQ9Ffl1c9f8f2X3/Dqg0/58/iSyzCzpZGqGVPFpCvLG9AhUoFdYAM5C/KXoG9a+Z//8RqA324+5O18y3k8suaJPQ3U7muWBagCFShd0SLIQ4PJY2vnu8tbPrr/HYC57txPLzgP8xMQILM0kJSmSlbgIsgDyCOwAcCxrLxc71lz73avjHZkyfPznqxAkWdVqyAXkIsgmyClKZts57RfuN3OVG19lcIZvDL43JVtHbQDmyBLA7IBhRYIkN2Y68apLOxpeDJdw0nuV9h7JW593bvaSgsHSG6MVpjrxqGuFM14B0pv8Hw9KDuw87zWrqr/6Cmc/ATcKbphqoRc7xv4GwWFlj4tYNUmAAAAAElFTkSuQmCC"></image></g></g></g><path d="M1062.3486,291.3544a.5.5,0,0,1-.476-.6528l.8437-2.6323a1.5094,1.5094,0,0,1,.3687-.6035l8.3921-8.39a.4921.4921,0,0,1,.1645-.1094,2.0471,2.0471,0,0,1,2.5977,2.5987.5044.5044,0,0,1-.1094.1645l-8.3926,8.3892a1.5163,1.5163,0,0,1-.6035.3682l-2.6328.8432A.4945.4945,0,0,1,1063.3486,290.3544Zm9.7481-11.4838-8.3047,8.3022a.5069.5069,0,0,0-.1235.2022l-.5474,1.707,1.7075-.5469a.5122.5122,0,0,0,.2022-.124l8.3051-8.3013a1.0629,1.0629,0,0,0-1.2392-1.2392Z" transform="translate(-1054.25 -279.60)" fill="#111111"></path><path d="M1066.8281,288.9892l-.9258-.3779.4629.1889-.4653-.1826a1.0531,1.0531,0,0,0-1.292-1.3008l-.3769-.9257a2.0466,2.0466,0,0,1,2.5971,2.5981Z" transform="translate(-1055.25 -278.75)" fill="#111111"></path></g></g></svg>
              <div>
              <div>
                <img
                  class="nikestyle-carousel-card-image"
                  src="${product.imgUrl}"
                  alt=""
                />
              </div>
              <div class="nikestyle-carousel-card-details">
                <div>
                <p class="nikestyle-carousel-card-details-title">Member product</p>
                <p class="nikestyle-carousel-card-details-customise">Customise</p>
                  <p class="nikestyle-carousel-card-details-name">${product.name}</p>
                  <p class="nikestyle-carousel-card-details-category">${product.category}</p>
                  <p class="nikestyle-carousel-card-details-price">MRP: ₹ ${product.price}</p>
              </div>
            </div>
          `;
    carousel.appendChild(productCard);
  });
};
fetchData().then(addButtonListener);
