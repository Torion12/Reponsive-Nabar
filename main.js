const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-menu");
const activeState = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navbar.classList.toggle("active");
})

activeState.forEach(n => n.addEventListener("click",() => {
	hamburger.classList.remove("active");
	navbar.classList.remove("active");
}))