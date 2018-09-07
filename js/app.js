window.onload = () => {
	document.querySelector('#autofocus').focus();

	const bigMp4Items = document.querySelectorAll(".timeline__item--mp4-big");
	bigMp4Items.forEach( item => {
		item.style.backgroundImage = `url(${item.attributes['data-image-src'].value})`;
	});

	const smallMp4Items = document.querySelectorAll(".timeline__item--mp4-small");
	smallMp4Items.forEach( item => {
		item.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .05) 70%, rgba(0, 0, 0, .6) 100%), url(${item.attributes['data-image-src'].value})`;
	});
};
