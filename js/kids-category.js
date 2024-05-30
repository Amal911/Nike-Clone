// Fetching product details
const fetchData = async () => {
    const result = await fetch("http://localhost:3000/kids-category");
    const data = await result.json();
    return data;
};
// Arrow button event listeners
const attachCarouselEventListeners = () => {
    document.querySelectorAll(".wrapper").forEach(wrapper => {
        const carousel = wrapper.querySelector(".carousel");
        const arrowBtns = wrapper.parentElement.querySelectorAll(".arrow-btn");
        const cardWidth = carousel.querySelector(".card").offsetWidth;

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const direction = btn.id === "left" ? -cardWidth : cardWidth;
                carousel.scrollBy({ left: direction, behavior: 'smooth' });
            });
        });
    });
};

//Popular Right Now Carousel Function
const popularRightNowFn = async () => {
    const data = await fetchData();
    const popularRightNow = data['popular-right-now'];
    let carousel = document.getElementById("popular-carousel");

    popularRightNow.forEach((product) => {
        let productCard = document.createElement("li");
        productCard.className = "card"; 
        productCard.innerHTML = `
            <div class="popular-right-now-card">
                <div>
                    <img class="popular-right-now-product-image" src="${product.imageUrl}" alt=""/>
                </div>
                <div class="popular-right-now-card">
                    <div>
                        <p class="popular-right-now-product-name">${product.name}</p>
                        <p class="popular-right-now-product-category">${product.category}</p>
                    </div>
                    <p class="popular-right-now-product-price">${product.price}</p>
                </div>
            </div>`;
        carousel.appendChild(productCard);
    });
    attachCarouselEventListeners();
};

//Icons For Any Season Carousel Function

const iconsForAnySeasonFn = async () => {
    const data = await fetchData();
    const iconsForAnySeason = data['icons-for-any-season'];
    let carousel = document.getElementById("icons-for-any-season");

    iconsForAnySeason.forEach((product) => {
        let productCard = document.createElement("li");
        productCard.className = "card";
        productCard.innerHTML = `
        <div class="popular-right-now-card">
        <div>
          <img
            class="popular-right-now-product-image"
            src="${product.imageUrl}"
            alt=""
          />
        </div>
        <div class="popular-right-now-card">
          <div>
           <br>                      
        </div>
        <p class="popular-right-now-product-name">${product.name}</p>
      </div>`;
        carousel.appendChild(productCard);
    });
    attachCarouselEventListeners();
};

popularRightNowFn();
iconsForAnySeasonFn();

// Carousel Function 
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".wrapper");

    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector(".carousel");
        const firstCard = carousel.querySelector(".card");
        const firstCardWidth = firstCard.offsetWidth;

        let isDragging = false,
            startX,
            startScrollLeft;

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            const x = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
            const scroll = startScrollLeft - (x - startX);
            carousel.scrollLeft = scroll;
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        carousel.addEventListener("touchstart", dragStart);
        carousel.addEventListener("touchmove", dragging);
        document.addEventListener("touchend", dragStop);
    });
});

// Hover menu function
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.card-heading');
    const hoverCardSection = document.querySelector('#hover-card-section');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const card = this.closest('.card');
                const otherCards = document.querySelectorAll('.card.show');
                otherCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('show');
                    }
                });
                card.classList.toggle('show');
            }
        });
    });

    function handleResize() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.card').forEach(card => card.classList.remove('show'));
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});
