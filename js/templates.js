'use strict';

function getEventHTML(event) {
	return `
		<div
			class="event" 
			style="
				margin-top:${event.offset}px;
				height: ${event.height}px;">
				<div class="details">
					<span class="title">${event.title}</span>
					<span class="location">${event.location}</span>
				</div>
		</div>`;
}

function getHourLabelHTML(hour, finalElement) {
	hour = hour % 12;
	let period = getHourPeriod(hour);
	let html = `
		<div class="hour-of-day">
			<span class="start">${hour}:00 <span class="period">${period}</span></span>
			<span class="half">${hour}:30</span>
	`;

	if (finalElement) {
		hour++;
		period = getHourPeriod(hour);
		html += `<span class="start">${hour}:00 <span class="period">${period}</span></span>`
	}

	return html += '</div>';
}

function getHourSlotHTML() {
	return `<div class="one-hour"></div>`;
}

function getHourPeriod(hour) {
	return Math.floor(hour / 12) > 0 ? 'AM' : 'PM';
}
