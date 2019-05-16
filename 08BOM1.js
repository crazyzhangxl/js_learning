window.onload = function () {
    timeDemo();
};

function timeDemo() {
    let timerDiv = document.getElementById('timerDiv');
    let count = 0;
    let interval = setInterval(function () {
        console.log(count);
        if (count === 5) {
            clearInterval(interval);
            timerDiv.className += "hide";
        }
        count++;
    }, 1000);
}