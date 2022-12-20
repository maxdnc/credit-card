const forma = document.getElementById("form");

const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCvc = document.getElementById("card-cvc");

const errorName = document.getElementById("error-name");
const errorNumber = document.getElementById("error-number");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");
const errorCvc = document.getElementById("error-cvc");
const submit = document.getElementById("button-sub");

// all the check form if correct //
function checkName() {
  const cardNameValue = cardName.value.trim();
  if (cardNameValue === "") {
    errorName.classList.add("active");
    errorName.innerText = "Error";
    cardName.classList.add("active");
    cardName.classList.remove("success");
    return false;
  } else if (!isLetter(cardNameValue)) {
    errorName.classList.add("active");
    errorName.innerText = "Enter valid name";
    cardName.classList.add("active");
    cardName.classList.remove("success");
    return false;
  } else {
    errorName.classList.remove("active");
    cardName.classList.remove("active");
    cardName.classList.add("success");
    return true;
  }
}

function checkNumber() {
  const cardNumberValue = cardNumber.value.trim();
  if (cardNumberValue === "") {
    errorNumber.classList.add("active");
    errorNumber.innerText = "Error";
    cardNumber.classList.add("active");
    cardNumber.classList.remove("success");
    return false;
  } else if (!isValidCardNumber(cardNumberValue)) {
    errorNumber.classList.add("active");
    errorNumber.innerText = "Number Not Valid";
    cardNumber.classList.add("active");
    cardNumber.classList.remove("success");
    return false;
  } else {
    errorNumber.classList.remove("active");
    cardNumber.classList.add("active");
    cardNumber.classList.add("success");
    return true;
  }
}

function checkDate() {
  const cardMonthValue = cardMonth.value.trim();
  const cardYearValue = cardYear.value.trim();
  if (
    (cardMonthValue === "" && cardYearValue === "") ||
    cardMonthValue === "" ||
    cardYearValue === ""
  ) {
    errorMonth.classList.add("active");
    errorMonth.innerText = "Error";
    cardMonth.classList.add("active");
    cardYear.classList.add("active");
    cardMonth.classList.remove("success");
    cardYear.classList.remove("success");
    return false;
  } else if (
    (!isNumber(cardMonthValue) && !isNumber(cardYearValue)) ||
    !isNumber(cardMonthValue) ||
    !isNumber(cardYearValue)
  ) {
    errorMonth.classList.add("active");
    errorMonth.innerText = "Number only";
    cardMonth.classList.add("active");
    cardYear.classList.add("active");

    cardMonth.classList.remove("success");
    cardYear.classList.remove("success");
    return false;
  } else {
    errorMonth.classList.remove("active");
    cardMonth.classList.remove("active");
    cardYear.classList.remove("active");
    cardMonth.classList.add("success");
    cardYear.classList.add("success");
    return true;
  }
}

function checkCvc() {
  const cardCvcValue = cardCvc.value.trim();

  if (cardCvcValue === "") {
    errorCvc.classList.add("active");
    errorCvc.innerText = "Error";
    cardCvc.classList.add("active");
    cardCvc.classList.remove("success");
    return false;
  } else if (!isNumber(cardCvcValue)) {
    errorCvc.classList.add("active");
    errorCvc.innerText = "Number only";
    cardCvc.classList.add("active");
    cardCvc.classList.remove("success");
    return false;
  } else {
    errorCvc.classList.remove("active");
    cardCvc.classList.remove("active");
    cardCvc.classList.add("success");
    return true;
  }
}

// active complete state //
function confirm() {
  const completeState = document.getElementById("complete-state");
  const forma = document.getElementById("form");

  if (checkCvc() && checkDate() && checkName() && checkNumber() === true) {
    completeState.classList.add("active");
    forma.classList.add("hidden");
  } else {
    echeck();
  }
}
// if form no correct animation shaking card //

function echeck() {
  const mainBackCard = document.getElementById("mainbackcard");
  const mainFrontCard = document.getElementById("mainfrontcard");
  const cardShaking = [
    { transform: "translatex(0)" },
    { transform: "translatex(-0.5rem)" },
    { transform: "translatex(0.5rem)" },
    { transform: "translatex(0)" },
  ];

  const cardShakingTiming = {
    duration: 50,
    iterations: 4,
  };

  mainBackCard.animate(cardShaking, cardShakingTiming);
  mainFrontCard.animate(cardShaking, cardShakingTiming);
}

// check only letter
function isLetter(letter) {
  return /^[a-zA-Z\s]*$/.test(letter);
}

// check only number
function isNumber(str) {
  return /^\d+$/.test(str);
}

// Check if the string is 16 digits long and contains only numbers

function isValidCardNumber(cardNumbertest) {
  return /^\d{16}$/.test(cardNumbertest);
}

// action when submit //

forma.addEventListener("submit", (event) => {
  event.preventDefault();
  checkCvc();
  checkDate();
  checkName();
  checkNumber();
  confirm();
});

/// . card visual real time//

const codeVisual = document.getElementById("code-style");
const nameVisual = document.getElementById("name-visual");
const monthVisual = document.getElementById("month-visual");
const yearVisual = document.getElementById("year-visual");
const cvcVisual = document.getElementById("cvg-visual");

cardNumber.addEventListener("keyup", (e) => {
  codeVisual.innerText = e.target.value.match(/.{1,4}/g).join(" ");
});

cardName.addEventListener("keyup", (e) => {
  nameVisual.innerText = e.target.value;
});

cardMonth.addEventListener("keyup", (e) => {
  monthVisual.innerText = e.target.value;
});

cardYear.addEventListener("keyup", (e) => {
  yearVisual.innerText = e.target.value;
});

cardCvc.addEventListener("keyup", (e) => {
  cvcVisual.innerText = e.target.value;
});

//
