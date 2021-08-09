// "use strict";
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  // body: document.querySelector('body'),
};
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const timer = {
  isActive: false,
  switchColors: null,
  start(event) {
    event.target.disabled = !this.isActive;
    switchColors = setInterval(() => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },
  stop() {
    refs.startBtn.disabled = this.isActive;
    clearInterval(switchColors);
    },
};
refs.startBtn.addEventListener('click', timer.start);
refs.stopBtn.addEventListener('click', timer.stop);