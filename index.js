const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
	loader.classList.add(".disparition");
});

var audio = $("#mysoundclip")[0];
$("nav a").mouseenter(function () {
	audio.play();
});