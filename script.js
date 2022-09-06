const ref = {
  body: document.body,
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = () => {
  const index = randomIntegerFromInterval(0, colors.length - 1);

  return colors[index];
};

const startChangeColor = () => {
  interval = setInterval(() => {
    ref.body.style.backgroundColor = getRandomColor();
  }, 1000);
};

const stopChangeColor = () => {
  clearInterval(interval);
  ref.body.style.backgroundColor = '#fff';
};

const handleClickStart = () => {
  startChangeColor();

  ref.btnStart.disabled = true;
  ref.btnStop.disabled = false;
};

const handleClickStop = () => {
  stopChangeColor();

  ref.btnStart.disabled = false;
  ref.btnStop.disabled = true;
};

ref.btnStart.addEventListener('click', handleClickStart);
ref.btnStop.addEventListener('click', handleClickStop);
