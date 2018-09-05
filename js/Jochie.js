/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown(id) {
	document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		let dropdowns = document.getElementsByClassName("dropdown-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

let noti = document.getElementById("notification");
let nr = document.getElementById("counted-notifications");

function changeNotification() {
	noti.style.display = 'none';
	nr.style.display = 'flex';
}
onload(changeNotification());

function fadeOut() {
	nr.classList.add('fade-out');
}

function fade() {
	nr.style.display = 'none';
	noti.style.display = 'flex';
}

function fadeIn() {
	noti.classList.remove('fade-out');
	noti.classList.add('fade-in');
}