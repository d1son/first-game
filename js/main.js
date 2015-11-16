var imageElements = document.getElementsByTagName('img');



for (var i = 0; i < imageElements.length; i++) {
	imageElements[i].addEventListener("click", function() {
		alert("you clicked");
	});
}


//document.getElementById("startButton").addeventlistener("click", startTimer);
//document.getElementsByClassName("thumbnail").addeventlistener("click", startCounter);