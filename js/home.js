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



const addButtonEventListener = function () {
    const carousels = document.querySelectorAll(".carousel-with-btn");
    // console.log(carousels);
    carousels.forEach((carousel) => {
      const firstCard = carousel.querySelector(".card");
      const firstCardWidth = firstCard.offsetWidth;
    //   console.log(carousel.id);
      let carouselSection = document.getElementById(carousel.id);
      let carouselType = carousel.dataset.carouselType;
    //   console.log(carouselType);
      const arrowBtns = document.querySelectorAll(
        `#${carouselType} #carosal-btn-container button`
      );
    //   console.log(arrowBtns);
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
  
      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          carouselSection.scrollLeft +=
            btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
      });
    });
  };
  addButtonEventListener()

 
let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));
let showingmail = document.getElementById('disp');
let DispLogout = document.getElementById('disp-logout');
let Disp_loggedIn = document.getElementById('disp-loggedIn');
let ToBeHided1 = document.getElementById('to-be-hidden1');
let ToBeHided2 = document.getElementById('to-be-hidden2');

let checkcred = () => {
    if (!sessionStorage.getItem("user-creds")) {
 
        console.log("checkred exception on case occured login again ");
        showingmail.innerHTML = `${UserInfo.FirstName}`;
    }
    else {
        Disp_loggedIn.style.display='block';
        
        showingmail.innerHTML = `Hi, ${UserInfo.FirstName} <img src="../assets/images/home/profile.svg" class="ms-2" height="20px">`;
        console.log("user-cred loaded");
        ToBeHided1.style.display='none';
        ToBeHided2.style.display='none';
        DispLogout.style.display='none';
 
    }
}
window.addEventListener('load', checkcred);
