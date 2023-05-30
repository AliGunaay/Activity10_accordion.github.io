$(document).ready(function () {
	$("#accordion").accordion({
		active: Math.floor(Math.random() * 3), // Display a random panel first
		collapsible: true, 
		heightStyle: "content", 
		animate: 200, // Animation duration
	});
});
