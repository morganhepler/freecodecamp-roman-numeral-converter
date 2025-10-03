const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const isNumber = /[^0-9]/;

// Array of roman numerals
const romanNumeralArray = [
  { character: 'M', value: 1000 },
  { character: 'CM', value: 900 },
  { character: 'D', value: 500},
  { character: 'CD', value: 400},
  { character: 'C', value: 100 },
  { character: 'XC', value: 90 },
  { character: 'L', value: 50 },
  { character: 'XL', value: 40 },
  { character: 'X', value: 10 },
  { character: 'IX', value: 9 },
  { character: 'V',  value: 5 },
  { character: 'IV', value: 4 },
  { character: 'I', value: 1 }
];

// Checks if number inputed by user is valid
function checkUserInput () {

  const input = numberInput.value;

  output.style.visibility = 'hidden';
  output.style.backgroundColor = '#f199bf';
  output.style.border = '5px solid #ec1d25';
  output.style.color = '#ec1d25';
  
  if (!input) {
    output.innerText = "Please enter a valid number";
    output.style.visibility = 'visible';
  }
  else if (input < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.visibility = 'visible';
  }
  else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.visibility = 'visible';
  }
  else if (isNumber.test(input)) {
    output.innerText = "Please enter a valid number";
    output.style.visibility = 'visible';
  }
  else {
    convertToRomanNumeral(input);
    output.style.visibility = 'visible';
    output.style.backgroundColor = '#0f7055';
    output.style.border = '5px solid #22443b';
    output.style.color = 'white';
  }
}

// Converts arabic numeral to roman numeral
function convertToRomanNumeral(number) {

  let romanNumeral = '';

  for (let i = 0; i < romanNumeralArray.length; i++) {
    while (number >= romanNumeralArray[i].value) {
      romanNumeral += romanNumeralArray[i].character;
      number -= romanNumeralArray[i].value;
    }
  }
  
  output.innerText = romanNumeral;
}

// Handles user clicking convert button
convertBtn.addEventListener("click", checkUserInput);