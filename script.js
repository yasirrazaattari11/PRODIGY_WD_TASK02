let seconds = 0;
let tens = 0;
let getSeconds = document.querySelector('.second'); // Correct class name to match HTML
let getTens = document.querySelector('.tens');     // Correct class name to match HTML
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

// Start Timer
btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer, 100); // 100 milliseconds for accurate timing
});

// Stop Timer
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

// Reset Timer
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0; // Reset to numbers
    seconds = 0; // Reset to numbers
    getSeconds.innerHTML = formatNumber(seconds);
    getTens.innerHTML = formatNumber(tens);
});

// Function to start the timer
function startTimer() {
    tens++;
    if (tens > 9) {
        getTens.innerHTML = tens; // No leading zero needed for tens > 9
    } else {
        getTens.innerHTML = '0' + tens; // Add leading zero for single-digit tens
    }
    if (tens > 99) { // Increment seconds when tens > 99
        seconds++;
        tens = 0;
        getSeconds.innerHTML = formatNumber(seconds); // Update seconds with leading zero
        getTens.innerHTML = formatNumber(tens); // Reset tens
    }
}

// Helper function to format numbers with leading zeros
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}
