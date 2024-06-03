var urlParams = new URLSearchParams(window.location.search);
var cat = urlParams.get("cat");
let id = urlParams.get("id");

const fetchProductData = async () => {
  const result = await fetch(`http://localhost:3000/${cat}?id=${id}`);
  let data = await result.json();
  data = data[0];
  console.log(data);

  document.getElementById("top-name").innerText = data.top_name;
  document.getElementById("bottom-name").innerText = data.bottom_name;
  document.getElementById("price-top").innerText = data.price;
  document.getElementById("price-bottom").innerText = data.price;
  document.getElementById("description").innerText = data.desc;
  document.getElementById("country").innerText = data.country;

  let button = document.getElementById("button");
  button.innerHTML = `
  ${
    data.status === "Buy"
      ? `<div class="btn btn-dark text-white px-5 mb-4 rounded-pill snkrs-product-button">
          ${data.status}
        </div>`
      : `<div class="btn btn-dark text-white px-5 mb-4 rounded-pill snkrs-product-button">
          ${data.status}
        </div>`
  }`;

  let imageSection = document.getElementById("image-section");
  let portImages = data.portImages;
  for (key in portImages) {
    let portImage = document.createElement("div");
    portImage.classList = "port-images mb-2";
    portImage.innerHTML = `
        <div class="card product-card" style="width: 18rem">
            <img
              src="${portImages[key]}"
              alt="portImage" 
            />
        </div>
    `;
    imageSection.appendChild(portImage);
  }

  let bottomSection = document.getElementById("bottom-section");
  let landImages = data.landImages;
  for (key in landImages) {
    let landImage = document.createElement("div");
    landImage.innerHTML = `
    <img
          src="${landImages[key]}"
          alt="landImage"
          class="img-fluid mb-5"
        />
    `;
    bottomSection.appendChild(landImage);
  }
};

fetchProductData();
