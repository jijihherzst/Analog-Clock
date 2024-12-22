setInterval(setClock, 1000);

function setClock() {
  const now = new Date();
  const secondHand = document.querySelector('[data-second-hand]');
  const minuteHand = document.querySelector('[data-minute-hand]');
  const hourHand = document.querySelector('[data-hour-hand]');

  const secondRatio = now.getSeconds() / 60;
  const minuteRatio = (secondRatio + now.getMinutes()) / 60;
  const hourRatio = (minuteRatio + now.getHours()) / 12;

  setPosition(secondHand, secondRatio);
  setPosition(minuteHand, minuteRatio);
  setPosition(hourHand, hourRatio);
}
function setPosition(element, rotation) {
  element.style.setProperty('--rotation', rotation * 360);
}
setClock();
