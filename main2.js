let hoursDiv = document.querySelector(".hours");

let minutesDiv = document.querySelector(".minutes");

let secondsDiv = document.querySelector(".seconds");
let period = document.querySelector(".period");

function setTimer() {
  let hours = new Date().getHours();
  let time = {
    h: new Date().getHours() % 12 || 12,
    m: new Date().getMinutes(),
    s: new Date().getSeconds(),
  };

  if (hours < 12) {
    period.textContent = "AM";
  } else {
    period.textContent = "PM";
  }
  hoursDiv.textContent = time.h;
  minutesDiv.textContent = time.m;
  secondsDiv.textContent = time.s;
}
setTimer();
setInterval(setTimer, 1000);
