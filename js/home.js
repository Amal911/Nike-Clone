// function for collapsing nav bar and show only on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;
window.addEventListener('scroll', function () {
     if (window.scrollY >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-60px';

    } else {
        // Scroll up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
//function for displaying and hidding nav bar dropdowns

document.addEventListener('DOMContentLoaded', () => {
    const featurehoverLink = document.getElementById('featureDropDown');
    const featurehoverSection = document.getElementById('NewAndFeatured-drop');

    const menhoverLink = document.getElementById('menDropDown');
    const menhoverSection = document.getElementById('men-drop');

    const womenhoverLink = document.getElementById('womenDropDown');
    const womenhoverSection = document.getElementById('women-drop');

    const kidshoverLink = document.getElementById('kidsDropDown');
    const kidshoverSection = document.getElementById('kids-drop');

    const saleshoverLink = document.getElementById('salesDropDown');
    const saleshoverSection = document.getElementById('sales-drop');

    featurehoverLink.addEventListener('mouseenter', () => {
        featurehoverSection.classList.remove('main-opt');
    });
    featurehoverLink.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!featurehoverSection.matches(':hover')) {
                featurehoverSection.classList.add('main-opt');
            }
        }, 100);
    });
    featurehoverSection.addEventListener('mouseleave', () => {
        featurehoverSection.classList.add('main-opt');
    });
    featurehoverSection.addEventListener('mouseenter', () => {
        featurehoverSection.classList.remove('main-opt');
    });




    menhoverLink.addEventListener('mouseenter', () => {
        menhoverSection.classList.remove('main-opt');
    });
    menhoverLink.addEventListener('mouseleave', () => {
       setTimeout(() => {
            if (!menhoverSection.matches(':hover')) {
                menhoverSection.classList.add('main-opt');
            }
        }, 100);
    });
    menhoverSection.addEventListener('mouseleave', () => {
        menhoverSection.classList.add('main-opt');
    });
    menhoverSection.addEventListener('mouseenter', () => {
        menhoverSection.classList.remove('main-opt');
    });



    womenhoverLink.addEventListener('mouseenter', () => {
        womenhoverSection.classList.remove('main-opt');
    });
    womenhoverLink.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!womenhoverSection.matches(':hover')) {
                womenhoverSection.classList.add('main-opt');
            }
        }, 100);
    });
    womenhoverSection.addEventListener('mouseleave', () => {
        womenhoverSection.classList.add('main-opt');
    });
    womenhoverSection.addEventListener('mouseenter', () => {
        womenhoverSection.classList.remove('main-opt');
    });


    kidshoverLink.addEventListener('mouseenter', () => {
        kidshoverSection.classList.remove('main-opt');
    });
    kidshoverLink.addEventListener('mouseleave', () => {
       setTimeout(() => {
            if (!kidshoverSection.matches(':hover')) {
                kidshoverSection.classList.add('main-opt');
            }
        }, 100);
    });
    kidshoverSection.addEventListener('mouseleave', () => {
        kidshoverSection.classList.add('main-opt');
    });
    kidshoverSection.addEventListener('mouseenter', () => {
        kidshoverSection.classList.remove('main-opt');
    });
    


    saleshoverLink.addEventListener('mouseenter', () => {
        saleshoverSection.classList.remove('main-opt');
    });
    saleshoverLink.addEventListener('mouseleave', () => {
       setTimeout(() => {
            if (!saleshoverSection.matches(':hover')) {
                saleshoverSection.classList.add('main-opt');
            }
        }, 100);
    });
    saleshoverSection.addEventListener('mouseleave', () => {
        saleshoverSection.classList.add('main-opt');
    });
    saleshoverSection.addEventListener('mouseenter', () => {
        saleshoverSection.classList.remove('main-opt');
    });






});
// swiper function 
document.addEventListener("DOMContentLoaded", function () {
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
        if (newScrollLeft <= 0 || newScrollLeft >=
            carousel.scrollWidth - carousel.offsetWidth) {

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
        timeoutId = setTimeout(() =>
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () =>
        clearTimeout(timeoutId));
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ?
                -firstCardWidth : firstCardWidth;
        });
    });
});