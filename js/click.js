var imageElements = document.getElementsByTagName('img');

for (var i = 0; i < imageElements.length; i++) {
	imageElements[i].addEventListener("click", function() {
		function clickdone() {
		  var hero = document.getElementById("hero");
		  var counter = document.getElementById("counter");
		  var count = counter.innerHTML;
		  count++;
		  counter.innerHTML = count;
		}
	});
}





//document.getElementById("startButton").addeventlistener("click", startTimer);
//document.getElementsByClassName("thumbnail").addeventlistener("click", startCounter);