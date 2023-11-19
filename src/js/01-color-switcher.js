const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.body;

console.log(startBtn.dataset.start);
console.log(stopBtn.dataset.stop)

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

let timerId = null;

function onClickStartBtn() {
    timerId = setInterval(() => {
        changeBodyColor() 
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function onClickStopBtn() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

function changeBodyColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

