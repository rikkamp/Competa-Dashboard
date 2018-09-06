window.onload = () => {
	document.querySelector('#autofocus').focus();
	const timelineItems = document.querySelectorAll(".timeline__item--mp4");
	timelineItems.forEach( item => {
		item.style.backgroundImage = `url(${item.attributes['data-image-src'].value})`;
	});
};
