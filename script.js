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

function calculateChange(element,elementValue){
    element.innerText=elementValue;
    calculateCost();
}

//memory  button click
document.getElementById("Eight-GB").addEventListener("click", function () {
  memoryCost = 0;
  calculateChange(memoryCostElement,memoryCost);
});
document.getElementById("Sixteen-GB").addEventListener("click", function () {
  memoryCost = 180;
  calculateChange(memoryCostElement,memoryCost);
});

//storage button click
document.getElementById("SSD256").addEventListener("click", function () {
    storageCost =0;
    calculateChange(storageCostElement,storageCost);
})
document.getElementById("SSD512").addEventListener("click", function () {
    storageCost =100;
    calculateChange(storageCostElement,storageCost);
})
document.getElementById("SSD1TB").addEventListener("click", function () {
    storageCost =180;
    calculateChange(storageCostElement,storageCost);
})

//delivery option

document.getElementById("Aug25").addEventListener("click", function (){
    deliveryCharge=0;
    calculateChange(deliveryChargeElement,deliveryCharge);
})
document.getElementById("Aug21").addEventListener("click", function (){
    deliveryCharge=20;
    calculateChange(deliveryChargeElement,deliveryCharge);
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