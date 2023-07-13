$(document).ready(() => {
  // Responsive navbar
  $("#menu-button").on("click", () => {
    $("#menu").toggleClass("hidden");
  });

  // Own Carousel
  $(".sampleSlick").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  const products = [
    {
      category: "Sports Drone ",
      name: "DJI FPV",
      img: "https://dji-official-fe.djicdn.com/dps/375b692174c489b8b11077a16a6f79f6.png",
      thumbnail:
        "https://getwallpapers.com/wallpaper/full/b/0/0/1287378-dji-wallpaper-3840x2160-hd.jpg",
      thumbnail2:
        "https://images.unsplash.com/photo-1575396874280-fbce5e9eb78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      tagline: "Redefine Flying",
      description:
        "Rip through the sky with speed, power, and complete control.",
      price: 735,
    },
    {
      category: "Camera Drone",
      name: "MAVIC 3 CINE",
      img: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/5e41e7a3caed3fe35ada2822224f94a8@retina_small.png",
      thumbnail:
        "https://getwallpapers.com/wallpaper/full/d/8/4/1287387-full-size-dji-wallpaper-1920x1080.jpg",
      thumbnail2: "https://mcdn.wallpapersafari.com/medium/63/94/Ayz9iS.jpg",
      tagline: "Imaging Above Everything",
      description: "Unrivaled Tri-Camera Flagship Imaging",
      price: 1599,
    },
    {
      category: "Camera Drone",
      name: "MAVIC 3 PRO",
      img: "https://dji-official-fe.djicdn.com/dps/44a74567e9b7c6452b021400176143a5.png",
      thumbnail:
        "https://getwallpapers.com/wallpaper/full/e/e/d/1287375-vertical-dji-wallpaper-3840x2160-notebook.jpg",
      thumbnail2:
        "https://c0.wallpaperflare.com/preview/775/744/45/dji-mavic-drone-flying-in-mid-air-during-day.jpg",
      tagline: "Inspiration in Focus",
      description: "Hasselblad Camera, Create to Inspire",
      price: 2199,
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));

  let productList;

  if (localStorage !== null) {
    productList = JSON.parse(localStorage.getItem("products"));
  }

  let productDiv = document.getElementById("product-section");

  for (let i = 0; i < productList.length; i++) {
    let productCard = `
    
        <div id="card" class="md:w-5/12 md:m-3 flex flex-col justify-center py-12 shadow-xl w-11/12 mx-auto my-4 hover:scale-105">
          <a href="/ProductDetailsPage/productDetails.html?id=${i}">
            <div class="text-center leading-8">
                <p class="text-sm text-slate-500">${productList[i].category}</p>
                <h1 class="text-4xl font-bold tracking-wider">${productList[i].name}</h1>
                <h3 class="font-semibold tracking-wide">${productList[i].tagline}</h3>
                <p class="mt-5 text-slate-700">Price:$ ${productList[i].price}</p>
            </div>
            <div>
                <img class="w-96 h-60 m-auto" src="${productList[i].img}" alt="${productList[i].name}">
            </div>
          </a>
        </div>
       
    `;
    productDiv.innerHTML += productCard;
  }
});
