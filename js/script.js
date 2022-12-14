

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
		document.body.classList.add('_lock')
 		menu.classList.add('_active')
 		menuBody.classList.add('_active')
 		
	})
	menuItems.forEach(function(item){
		item.addEventListener('click', function(){
			if(!document.body.classList.contains('__lock')){
				document.body.classList.remove('_lock')
			}
			menu.classList.remove('_active')
 			menuBody.classList.remove('_active')
		})
	})
}






// if (!(menu.classList.contains("_active") && menuBody.classList.contains("_active"))){
// 	menu.addEventListener('click', function() {
// 		document.body.classList.toggle('_lock')
// 		menu.classList.add('_active')
// 		menuBody.classList.add('_active')
// 		console.log(menu.classList)
			
// 	})
// }
	
	
menu

if (menuBody.classList.contains('_active')) {
	console.log('heyyy')
	// menu.addEventListener('click', function() {
	// 	document.body.classList.toggle('_lock')
	// 	menu.classList.remove('_active')
	// 	menuBody.classList.remove('_active')
	// 	console.log('heyyy')
			
	// })
		
	}

	



// let menuBurger = document.querySelectorAll('.menu__item')
// if (menuBurger) {
// 	if (menu.classList.contains('_active')){
// 		menuBurger.forEach(function(e){
// 			e.addEventListener('click', function(){
// 				menu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			})
// 		})

// 	}
	
	
// }








