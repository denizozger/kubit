'use strict';

function layOutBaseUI() {
	const numberOfHoursToDisplay = 12,
		startingHour = 9,
		finalHourToDisplay = startingHour + numberOfHoursToDisplay;
		
	for (let hour = startingHour; hour < finalHourToDisplay; hour++) {
 		layOutHourLabel(hour, hour + 1 === finalHourToDisplay);
 		// by spec there's one extra hour label (n+1) enclosing the slots (n)
 		if (hour + 1 !== finalHourToDisplay) {
 			layOutHourSlot();
 		}
	}
}

function layOutHourLabel(hour, finalElement) {
	$('.hours-of-day-container').append(getHourLabelHTML(hour, finalElement));
}

function layOutHourSlot() {
	$('.calendar-container').append(getHourSlotHTML());
}

function layOutDay(eventsInJSON) {
	let events = eventsInJSON.map(getEventFromJSON);
	events.forEach(layOutEvent);
}

function getEventFromJSON(eventInJSON) {
	return {
		title: 'Sample item',
		location: 'Sample location',
		index: Math.floor(eventInJSON.start / 60),
		offset: eventInJSON.start % 60,
		height: eventInJSON.end - eventInJSON.start
	}
}

function layOutEvent(event) {
	$(`.one-hour:eq(${event.index})`).append(getEventHTML(event));
}

// layOut some test data and expose layOutDay function
const testEventsInJSON = [
	{start: 30, end: 150},
	{start: 540, end: 600},
	{start: 560, end: 620},
	{start: 610, end: 670}
];

layOutBaseUI();
layOutDay(testEventsInJSON);

window.layOutDay = layOutDay;