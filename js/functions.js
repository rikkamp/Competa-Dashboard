function fadeOut() {
	let nr = document.getElementById("counted-notifications");
	nr.classList.toggle('fade-out');
}

function fade() {
	let nr = document.getElementById("counted-notifications");
	let noti = document.getElementById("notification");
	nr.style.display = 'none';
	noti.style.display = 'flex';
}

function fadeIn() {
	let noti = document.getElementById("notification");
	noti.classList.toggle('fade-out');
	noti.classList.toggle('fade-in');
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown(id) {
	document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.user__dropbtn')) {

		let dropdowns = document.getElementById("content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
