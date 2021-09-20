let scroller = document.querySelector('.scroller')

window.onscroll = function () {
	if (window.pageYOffset > 200) {
		scroller.classList.add('active')
	} else {
		scroller.classList.remove('active')
	}
}

scroller.onclick = function () {
	window.scrollTo(0, 0)
}