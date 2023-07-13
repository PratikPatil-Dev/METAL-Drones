$(document).ready(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);

  const productList = JSON.parse(localStorage.getItem("products"));

  console.log(productList[id].thumbnail);

  let heading = document.getElementById("heading");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const bgImg = isMobile
    ? productList[id].thumbnail2
    : productList[id].thumbnail;
  console.log(isMobile);
  console.log(bgImg);

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
      <button class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold my-4 py-2 px-4 rounded w-full w-32">
        Buy Now
      </button>
    </div>
  </div>
</div>

  `;
  heading.innerHTML = hdgDiv;
});
