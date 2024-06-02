let urlParams = new URLSearchParams(window.location.search);
let categ = urlParams.get("cat");
if (categ==null) {
  categ="mens"
}
console.log(categ);


document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar-container');
    var toggleBtn = document.getElementById('toggleSidebarBtn');
    var toggleText = document.getElementById('filter-text');
    // var iconBtn = document.getElementById('iconBtn');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        // iconBtn.style.display = 'block';
        toggleText.textContent = 'Hide Filter';
    } else {
        sidebar.style.display = 'none';
        // iconBtn.style.display = 'block';
        toggleText.textContent = 'Show Filter';
    }
});

const fetchData = async (categ) => {
  
  const result = await fetch(`http://localhost:3000/${categ}`);
  let data = await result.json();
  console.log(data);
  return data;
};
// categ = "kids";
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
