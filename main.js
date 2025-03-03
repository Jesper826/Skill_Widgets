let minutes = 0, seconds = 0, interval;
const display = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

function updateDisplay() {
    display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

const rangeValue = document.getElementById("js--rangeValue");  
const slider = document.getElementById("js--slider");
rangeValue.innerText = slider.value + "x";

slider.oninput = function() {
    rangeValue.innerText = slider.value + "x";
    rangeValue.style.fontSize = slider.value + "rem";
}

