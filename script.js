const number = document.getElementById("number");
const output = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");
const outDiv = document.getElementById("output");

const keyArr = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
  ];

let resultArr = [];

const numberToNumeral = () => {
  for (const [numeral,int] of keyArr) {
    while (number.value >= int) {
      resultArr.push(numeral);
      number.value -= int;    
  } 
  };
  return resultArr.join('');
};



const checkInput = () => {
  const numberParse = parseInt(number.value);

  if (number.value===0 || number.value<0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;

  } else if (number.value>3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;

  } else if (isNaN(numberParse) || !number.value) {
    output.innerText = "Please enter a valid number";
    return;

  } else {
  output.textContent = numberToNumeral(numberParse);
  number.value = "";
  }
};

convertBtn.addEventListener("click", () => {
  resultArr = [];
  checkInput();
  });

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    resultArr = [];

    checkInput();
  }
});
