// *****global variables ****
var basePrice = 1299;
var memoryCost = 0;
var storageCost = 0;
var deliveryCharge = 0;
var totalPrice = 1299;
var priceAfterPromo=1299;
var promo=0;

// *************

// *******elements*******

const basePriceElement = document.getElementById("base-price");
const memoryCostElement = document.getElementById("memory-cost");
const storageCostElement = document.getElementById("storage-cost");
const deliveryChargeElement = document.getElementById("delivery-charge");
const totalPriceElement = document.getElementById("total-price");
const totalAmountElement=document.getElementById("total-amount");
const promoInputElement = document.getElementById("promo");


// ********
function calculateCost() {
  totalPrice = basePrice + memoryCost + storageCost + deliveryCharge;
  totalPriceElement.innerText = totalPrice;
  priceAfterPromo=totalPrice - totalPrice*promo ;
  totalAmountElement.innerText = priceAfterPromo;
  
}

//memory  button click
document.getElementById("Eight-GB").addEventListener("click", function () {
  memoryCost = 0;
  memoryCostElement.innerText = 0;
  calculateCost();
});
document.getElementById("Sixteen-GB").addEventListener("click", function () {
  memoryCost = 180;
  memoryCostElement.innerText = 180;
  calculateCost();
});

//storage button click
document.getElementById("SSD256").addEventListener("click", function () {
    storageCost =0;
    storageCostElement.innerText="0";
    calculateCost();
})
document.getElementById("SSD512").addEventListener("click", function () {
    storageCost =100;
    storageCostElement.innerText="100";
    calculateCost();
})
document.getElementById("SSD1TB").addEventListener("click", function () {
    storageCost =180;
    storageCostElement.innerText="180";
    calculateCost();
})

//delivery option

document.getElementById("Aug25").addEventListener("click", function (){
    deliveryCharge=0;
    deliveryChargeElement.innerText="0";
    calculateCost();
})
document.getElementById("Aug21").addEventListener("click", function (){
    deliveryCharge=20;
    deliveryChargeElement.innerText="20";
    calculateCost();
})

//promo calculation

document.getElementById("promo-btn").addEventListener("click", function () {
    var promoCode = promoInputElement.value;
    console.log(promoCode);
    if(promoCode == "stevekaku"){
        promo=.20;
    }
    else{
        promo=0 ;
    }
    calculateCost();
})