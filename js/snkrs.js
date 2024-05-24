const initialImage = "../assets/images/snkrs/grid.svg";
const newImage = "../assets/images/snkrs/feed.svg";

document.getElementById("toggle").addEventListener("click", function () {
  
  const myImg = document.getElementById("toggle");
  if (myImg.dataset.logo == "feed") {
    myImg.src = newImage;
    myImg.dataset.logo = "grid";
    document.getElementById("feed-container").style.display="none"
    document.getElementById("grid-container").style.display="flex"
  } else {
    myImg.src = initialImage;
    myImg.dataset.logo = "feed";
    document.getElementById("feed-container").style.display="flex"
    document.getElementById("grid-container").style.display="none"
  }
});
