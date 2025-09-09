$(function(){
    let mobileSearchIcon = document.querySelector(".mobile-search");
    let mobileSearchscreen = document.querySelector("#search");
    let searchClose = document.querySelector(".search-close");

    mobileSearchIcon.addEventListener('click', function(){
        mobileSearchscreen.classList.add("search_active");
    });

    searchClose.addEventListener('click', function(){
        mobileSearchscreen.classList.remove("search_active");
    });

   // Grab all necessary elements
let incrementBtn = document.querySelector(".inc");
let decrementBtn = document.querySelector(".dec");
let amount = document.querySelector(".amount");
let result = document.querySelector(".result");

let incrementBtn1 = document.querySelector(".inc1");
let decrementBtn1 = document.querySelector(".dec1");
let amount1 = document.querySelector(".amount1");
let result1 = document.querySelector(".result1");

let amount2 = document.querySelector(".total_amount"); // subtotal of both
let amount3 = document.querySelector(".all_amount");   // final total

// Function to recalc grand totals
function recalcTotal() {
  let subtotals = document.querySelectorAll(".amount, .amount1");
  let total = 0;

  subtotals.forEach(item => {
    total += Number(item.value);
  });

  amount2.value = total;
  amount3.value = total;
}

// First product increment
incrementBtn.addEventListener("click", function () {
  if (Number(result.value) + 1 < 11) {
    result.value = Number(result.value) + 1;
    amount.value = (result.value) * 14.00;
    recalcTotal();
    decrementBtn.style.cursor = "pointer";
  } else {
    incrementBtn.style.cursor = "not-allowed";
  }
});

// First product decrement
decrementBtn.addEventListener("click", function () {
  if (Number(result.value) > 1) {
    result.value = Number(result.value) - 1;
    amount.value = (result.value) * 14.00;
    recalcTotal();
    incrementBtn.style.cursor = "pointer";
  } else {
    decrementBtn.style.cursor = "not-allowed";
  }
});

// Second product increment
incrementBtn1.addEventListener("click", function () {
  if (Number(result1.value) + 1 < 11) {
    result1.value = Number(result1.value) + 1;
    amount1.value = (result1.value) * 14.00;
    recalcTotal();
    decrementBtn1.style.cursor = "pointer";
  } else {
    incrementBtn1.style.cursor = "not-allowed";
  }
});

// Second product decrement
decrementBtn1.addEventListener("click", function () {
  if (Number(result1.value) > 1) {
    result1.value = Number(result1.value) - 1;
    amount1.value = (result1.value) * 14.00;
    recalcTotal();
    incrementBtn1.style.cursor = "pointer";
  } else {
    decrementBtn1.style.cursor = "not-allowed";
  }
});

})