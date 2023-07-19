const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const productList = JSON.parse(localStorage.getItem("products"));
productList[id]["quantity"] = 0;
console.log(productList[id]);

let cartCnt = 0;

$(document).ready(() => {
  let heading = document.getElementById("heading");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const bgImg = isMobile
    ? productList[id].thumbnail2
    : productList[id].thumbnail;

  let hdgDiv = `
    <div class="w-full min-h-screen bg-no-repeat bg-cover bg-fixed relative overflow-hidden flex items-center" style="background-image: url(${bgImg})">
      <div id="content" class="relative h-full w-full overflow-y-scroll snap-y">
        <div class="text-white mx-4 md:ml-28 h-screen w-full snap-center my-auto flex flex-col justify-center">
          <h1 class="font-bold text-2xl md:text-4xl tracking-wider">${productList[id].name} Drone</h1>
          <p class="font-semibold tracking-wide">${productList[id].tagline}</p>
        </div>
        <div class="text-white mx-4 md:ml-28 h-screen w-full snap-center my-auto flex flex-col justify-center">
          <h1 class="font-bold text-2xl md:text-4xl tracking-wider w-9/12 md:w-4/12">${productList[id].description}</h1>
        </div>
        <div class="text-white mx-4 md:ml-28 h-screen w-full snap-center flex flex-col justify-center">
          <h1 class="font-bold text-2xl md:text-4xl tracking-wider">Get Yours Now! <br> $${productList[id].price}</h1>
          <a href="#buyNow" class="text-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold my-4 py-2 px-4 rounded w-full w-32">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  `;

  heading.innerHTML = hdgDiv;

  let buySec = $("#buyNow");

  let buyNowDiv = `
    <div class="container mx-auto px-4 w-full sm:w-4/5 overflow-hidden text-center">
  <h1 class="text-2xl font-bold mb-6">Want To Buy?</h1>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="flex flex-col items-center md:items-start mb-6 md:mb-0">
      <h2 class="text-2xl md:text-4xl font-bold mb-2 ">${productList[id].name} Drone</h2>
      <p class="text-lg md:text-xl">${productList[id].description}</p>
    </div>
    <div class="flex flex-col items-center md:items-end">
      <h3 class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">$${productList[id].price}</h3>
      <div class="flex items-center space-x-4">
        <label for="quantity" class="text-lg">Quantity :</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value="1"
          onchange="totalPrice()"
          class="w-16 md:w-24 h-8 p-2 text-white bg-transparent border border-gray-500 rounded text-white"
        />
      </div>
      <div class="w-full flex items-center space-x-4 mt-2">
        <label for="total" class="text-lg">Total :</label>
        <div class="w-1/2">
          <span id="total" class="text-lg">$${productList[id].price}</span>
        </div>
      </div>
      <button class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold my-4 py-2 px-6 rounded"  onclick="addToCartAndRedirect(${id})"  ">
        Buy Now
      </button>
    </div>
  </div>
</div>

  `;

  buySec.html(buyNowDiv);
});
let quantityValue;
function totalPrice() {
  let quantityInput = $("#quantity");
  quantityValue = quantityInput.val();

  let totalInSpan = $("#total");
  let totalPrice = productList[id].price * quantityValue;
  totalInSpan.text(`$ ${totalPrice}`);
}

function addToCartAndRedirect(id) {
  alert(`id ${id} is clicked`);
  productList[id]["quantity"] = quantityValue;
  alert(`qunatity is ${quantityValue}`);
  localStorage.setItem(`${id}`, JSON.stringify(productList[id]));
  window.location.href = "/CheckoutPage/checkout.html";
}
