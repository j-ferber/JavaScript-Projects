setInterval(displayCurrentTime, 1000);

function displayCurrentTime() {
  const day = new Date();
  const time = day.toLocaleTimeString().slice(0, 7);
  document.querySelector('.js-display-time').innerHTML = time;
  document.querySelector('.js-meridiem').innerHTML = day.toLocaleTimeString().slice(7, 10);
}