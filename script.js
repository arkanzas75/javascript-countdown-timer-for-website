let newYear = '1 January 2021 00:00';

function remainTime(endtime) {
	let timeLeft = Date.parse(endtime) - Date.parse(new Date());
	let secondsLeft = Math.floor((timeLeft/1000) % 60);
	let minutesLeft = Math.floor((timeLeft/1000/60) % 60);
	let hoursLeft = Math.floor((timeLeft/1000/60/60) % 24);
	let daysLeft = Math.floor((timeLeft/(1000*60*60*24)));

	return {
		'timeleft' : timeLeft,
		'secondsleft' : secondsLeft,
		'minutesleft' : minutesLeft,
		'hoursleft' : hoursLeft,
		'daysleft' : daysLeft
	};
}

function setClock(id, endtime) {
	let timerHTML = document.getElementById(id);
	let secondsHTML = timer.querySelector('.seconds');
	let minutesHTML = timer.querySelector('.minutes');
	let hoursHTML = timer.querySelector('.hours');
	let daysHTML = timer.querySelector('.days');
	let interval = setInterval(updateClock, 1000);

	function updateClock() {
		let z = remainTime(endtime);
		secondsHTML.textContent = z.secondsleft;
		minutesHTML.textContent = z.minutesleft;
		hoursHTML.textContent = z.hoursleft;
		daysHTML.textContent = z.daysleft;

		if (hoursHTML.textContent.length == 1) {
			hoursHTML.textContent = 0 + hoursHTML.textContent;
		}
	}
}

setClock('timer', newYear);

console.log(new Date());
