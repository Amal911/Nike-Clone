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

// Fetching product details
const fetchData = async () => {
    const result = await fetch("http://localhost:3000/jordan-home");
    const data = await result.json();
    return data;
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
                    <img class="popular-right-now-product-image" src="${product.imgUrl}" alt=""/>
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
};

//Icons For Any Season Carousel Function

const shopJordanEssentials = async () => {
    const data = await fetchData();
    const iconsForAnySeason = data['shop-jordan-essentials'];
    let carousel = document.getElementById("shop-jordan-essentials");

    iconsForAnySeason.forEach((product) => {
        let productCard = document.createElement("li");
        productCard.className = "card";
        productCard.innerHTML = `
        <div class="more-to-explore-card">
                      <div>
                        <img
                          class="popular-right-now-product-image"
                          src="${product.imgUrl}"
                          alt=""
                        />
                      </div>
                      <p class="popular-right-now-product-name">${product.name}</p>
                      
                    </div>
        `;
        carousel.appendChild(productCard);
    });
};

popularRightNowFn();
shopJordanEssentials();

const addData =async ()=>{
    await popularRightNowFn();
    await shopJordanEssentials();
};
addData().then(attachCarouselEventListeners)

// Carousel Function 
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".wrapper");

    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector(".carousel");
        const firstCard = carousel.querySelector(".card");
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
//Navbar hovering
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('sticky-nav').style.display = "none";
    
    window.addEventListener('scroll', function () {
        if (this.window.scrollY == 0) {
            document.getElementById('sticky-nav').style.display = "none";
            document.getElementById('main-nav').style.display = "block";    
        } else {
            document.getElementById('sticky-nav').style.display = "block";
            document.getElementById('main-nav').style.display = "none";
            
        }
    });
});





