

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





//Бургер

const menu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const menuItems = document.querySelectorAll('.menu__item')

if (!(menu.classList.contains("_active") && menuBody.classList.contains("_active"))){
	menu.addEventListener('click', function(e){
		document.body.classList.toggle('_lock')
 		menu.classList.toggle('_active')
 		menuBody.classList.toggle('_active')
 		
	})
	menuItems.forEach(function(item){
		item.addEventListener('click', function(){
			menu.classList.toggle('_active')
			document.body.classList.remove('_lock')
			document.body.classList.toggle('_lock')
 			menuBody.classList.toggle('_active')
			document.body.classList.remove('_lock')
		})
	})
}












