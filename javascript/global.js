const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav_list");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		menu.classList.remove("active");
	})
);
