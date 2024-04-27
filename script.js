let timer; // Variable to hold the setInterval instance
let time = 0; // Initial time in milliseconds
let isRunning = false; // Flag to track if the stopwatch is running
let laps = []; // Array to store lap times

function formatTime(ms) {
    let date = new Date(ms);
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let milliseconds = (date.getUTCMilliseconds() / 10).toFixed(0).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime(time);
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            time += 10; // Increase time by 10 milliseconds (adjust for accuracy)
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    time = 0;
    laps = [];
    isRunning = false;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        laps.push(time);
        let lapTime = laps[laps.length - 1] - (laps.length > 1 ? laps[laps.length - 2] : 0);
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(lapTime)}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}
