const popup = document.querySelector('.main__block1')


function disableScroll() {
	console.log('work')
	let pagePosition = window.scrollY
	body.classList.add('scroll-off')
	body.dataset.position = pagePosition
	body.style.top = -pagePosition
}

function enableScroll() {
	let pagePosition = parseInt(body.dataset.position, 10)
	body.style.top = 'auto'
	body.classList.remove('scroll-off')
	window.scroll({top: pagePosition})
	body.removeAttribute('data-position')
}

popup.addEventListener('click', disableScroll)