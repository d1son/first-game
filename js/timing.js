var secondsCount = 0;
var timerInterval;
var startButton = document.getElementById("startButton");



function addSeconds () {
	secondsCount++;
}

function toggleTime () {
		setTimeout(function() {
		if(secondsCount === 0) {
			clearInterval(timerInterval);
			alert("Time is up!");
		}
	}, 3000);
}

startButton.addEventListener("click", toggleTime);