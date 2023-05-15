function removeHidden(button) {
  document.querySelector(`.${button}-calc`).classList.remove('hidden');
  document.querySelector(`.choice`).classList.add('hidden');
}

document.querySelector('.js-english').addEventListener('click', function() {
  removeHidden('js-english');
});

document.querySelector('.js-metric').addEventListener('click', function() {
  removeHidden('js-metric');
});

document.querySelector('.js-calculate-english-button').addEventListener('click', function() {
  const height = document.querySelector('.js-english-height');
  const weight = document.querySelector('.js-english-weight');
  const showResult = document.querySelector('.js-output-BMI-english');
  let result = ''; 
  if (weight.value >= 0 && height.value >= 0) {
    result = Math.round(weight.value / (height.value * height.value) * 703 * 10) / 10;
    if (result >= 0) {
      showResult.innerHTML = result;
      determineStatus('english');
    }
    else {
      alert('You entered a value that is not a number. Try again.');
    }
  }
  else {
    alert('The entered numbers are not possible. Try again.');
  }
});

document.querySelector('.js-calculate-metric-button').addEventListener('click', function() {
  const height = document.querySelector('.js-metric-height');
  const weight = document.querySelector('.js-metric-weight');
  const showResult = document.querySelector('.js-output-BMI-metric');
  let result = ''; 
  if (weight.value >= 0 && height.value >= 0) {
    result = Math.round(weight.value / (height.value * height.value) * 10) / 10;
    if (result >= 0) {
      showResult.innerHTML = result;
      determineStatus('metric');
    }
    else {
      alert('You entered a value that is not a number. Try again.');
    }
  }
  else {
    alert('The entered numbers are not possible. Try again.');
  }
});

function determineStatus(unit) {
  const BMI = document.querySelector(`.js-output-BMI-${unit}`).innerHTML;
  const statusWeight = document.querySelector(`.js-${unit}-output-scale`);
  if (BMI < 18.5) {
    statusWeight.innerHTML = 'Underweight';
  }
  else if (BMI >= 18.5 && BMI <= 24.9) {
    statusWeight.innerHTML = 'Healthy Weight';
  }
  else if (BMI >= 25 && BMI <= 29.9) {
    statusWeight.innerHTML = 'Overweight';
  }
  else {
    statusWeight.innerHTML = 'Obesity';
  }
}
