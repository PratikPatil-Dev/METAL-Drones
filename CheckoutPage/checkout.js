let storedItems = [];
function removeItem(i, productName) {
  let action = confirm(
    `Do you want to remove ${productName} of id ${i} from your cart?`
  );
  if (action) {
    localStorage.removeItem(`${i}`);
    // storedItems = storedItems.filter((item) => item.name !== productName);
    location.reload();
  }
}

function redirect() {
  window.location.href = "/OrderPlacedPage/order.html";
}
$(document).ready(() => {
  for (let i = 0; i <= 2; i++) {
    localStorage.getItem(i) !== null
      ? storedItems.push(JSON.parse(localStorage.getItem(i)))
      : "";
  }
  console.log(storedItems);
  console.log(localStorage.getItem(0));

  let cnt = storedItems.length;
  localStorage.setItem("cnt", cnt);
  $("#cnt").text(cnt);

  let itemCont = $("#itemCards");
  let total = 0;

  for (let i = 0; i < storedItems.length; i++) {
    let cartItem = `
    <div class="flex justify-between items-center w-full">
        <div class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between w-full">
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 bg-gray-200 rounded-lg">
                <img src="${storedItems[i].img}" alt="${storedItems[i].name}">
              </div>
              <div>
                <h3 class="md:text-lg font-bold">${storedItems[i].name}</h3>
                <p class="text-gray-500">$${storedItems[
                  i
                ].price.toLocaleString()}</p>
                ${
                  storedItems[i].quantity == undefined
                    ? `<p class="text-gray-500">Quantity: 1 </p>`
                    : `<p class="text-gray-500">
                      Quantity: ${storedItems[i].quantity}
                    </p>`
                }
              </div>
            </div>
            ${
              storedItems[i].totalPrice == undefined
                ? `<p class="md:text-lg">$${storedItems[
                    i
                  ].price.toLocaleString()}</p>`
                : `<p class="md:text-lg">$${storedItems[
                    i
                  ].totalPrice.toLocaleString()}</p>`
            }
        </div>
       <button onclick="removeItem(${storedItems[i].id}, '${
      storedItems[i].name
    }')" class="px-4 py-2 mx-4 bg-red-500 text-white font-bold rounded md:h-10 hover:bg-white hover:text-red-500 hover:shadow-md">
  Remove
</button>
        
  `;

    itemCont.append(cartItem);

    total += storedItems[i].totalPrice
      ? storedItems[i].totalPrice
      : storedItems[i].price;
  }

  let taxedAmount = 0.18 * total;

  let formattedTax = taxedAmount.toLocaleString();

  let formattedTotal = total.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });

  let finalAmount = $("#finalAmount");

  let priceDiv = `
            <div class="flex justify-between">
                <span>GST(18% included)</span><span>$ ${formattedTax}</span>
            </div>
            <div class="flex justify-between">
                <span class="font-bold">Total</span
                ><span class="font-bold">${formattedTotal}</span>
            </div>
  `;

  finalAmount.html(priceDiv);
});
