// window.addEventListener("scroll", function () {
//   var header = document.getElementById("header-bar");
//   var sidebar = document.getElementById("sidebar");
//   var scrollPosition = window.scrollY;

//   if (scrollPosition < 80) {
//     // You can adjust this value as needed

//     header.style.position = "fixed";
//     header.style.top = "0";
//     sidebar.style.position = "fixed";
//     sidebar.style.top = "80px"; // Same as the initial value in CSS
//   } else {
//     header.style.position = "static";
//     sidebar.style.position = "static";
//   }
// });

const fetchData = async (categ) => {
  const result = await fetch(`http://localhost:3000/${categ}`);
  let data = await result.json();
  console.log(data);
  return data;
};
let categ = "kids";
const loadData = async () => {
  const productContainer = document.getElementById("products-container");
  console.log(productContainer);
  let productData = await  fetchData(categ)
//   console.log(productData);
  productData.forEach(product => {
      let productCard = document.createElement("div");
      productCard.classList = "col-md-4";
      productCard.innerHTML = `
        <a href="./product.html?cat=${categ}&id=${product.id}">
            <div class="card mb-4">
                <img id="product-image" src="${product.imgUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title pt-3" id="product-title">${product.name}</h5>
                    <p class="card-category pt-1" id="product-category">${product.category}</p>
                    <p class="card-price pt-1" id="product-price">MRP : <span id="card-price-mrp">${product.price}</span></p>
                </div>
            </div>
        </a>
        `;
        productContainer.appendChild(productCard);
  });
};
loadData()