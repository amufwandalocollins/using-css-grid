var cells = Array.from(document.querySelectorAll(".cell")),
	input = document.querySelector("input"),
		main = document.querySelector(".main");
input.addEventListener("change", function(evt) {
	var value = parseInt(evt.target.value);
	setClass(value);
});

function setClass(value) {
	var current = document.querySelector('.current');
	if (current) {