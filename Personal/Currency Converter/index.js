const userMoney = document.querySelector('.js-amount');
const userCurrency = document.querySelector('.js-input-content');
const outputCurrency = document.querySelector('.js-convert-content');
const convertButton = document.querySelector('.js-convert-button');
const userInput = document.querySelector('.js-user-input');
const originalCurrency = document.querySelector('.js-original-currency');
const exitCurrency = document.querySelector('.js-output-currency');
const convertedMoney = document.querySelector('.js-calculated-output');

convertButton.addEventListener('click', () => {
  if (userMoney.value.trim() != '' & userMoney.value >= 0){
    convert()
  }
  else {
    alert('Please enter a valid number.')
  }
})

const convert = () => {
  const APIKey = '73f42cd048e0466cb809067ed527b16a'
  fetch(`https://openexchangerates.org/api/latest.json?app_id=${APIKey}&base=${userCurrency.value}`)
    .then(response => response.json())
    .then(data => {
      userInput.innerText = userMoney.value;
      exitCurrency.innerText = outputCurrency.value;
      const currency = outputCurrency.value
      convertedMoney.innerText = Math.round(data['rates'][`${currency}`]*userMoney.value*100)/100
    })
}