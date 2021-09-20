let monthPeriod = document.querySelector('.month')
let yearPeriod = document.querySelector('.year')
let switchItem = document.querySelector('.switch')

yearPeriod.onclick = function () {
	switchItem.classList.add('active')
	switchItem.classList.remove('none-active')
	yearPeriod.style.color = 'white'
	monthPeriod.style.color = '#616368'
}

monthPeriod.onclick = function () {
	switchItem.classList.add('none-active')
	switchItem.classList.remove('active')
	monthPeriod.style.color = 'white'
	yearPeriod.style.color = '#616368'
}
