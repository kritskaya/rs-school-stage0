function preloadImages() {
	const seasons = ['winter', 'spring', 'summer', 'autumn'];

	for (let i = 0; i < seasons.length; i++) {
		for (let j = 1; j <= 6; j++) {
			const img = new Image();
			img.src = `./assets/img/${seasons[i]}/${j}.jpg`;
		}
	}
}

preloadImages();