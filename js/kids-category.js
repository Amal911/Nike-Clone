//products json data


//Carousel function
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".wrapper");

    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector(".carousel");
        const arrowBtns = wrapper.parentElement.querySelectorAll(".arrow-btn");
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

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const direction = btn.id === "left" ? -firstCardWidth : firstCardWidth;
                carousel.scrollBy({ left: direction, behavior: 'smooth' });
            });
        });
    });
});

//Hover menu function
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