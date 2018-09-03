window.onload = () => {
	const timelineItems = document.querySelectorAll(".timeline__item");
	timelineItems.forEach( item => {
		item.style.backgroundImage = `url(${item.attributes['data-image-src'].value})`;
	});
}
