

//---Swiper

const popularSlider = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		},

		
	}
});







