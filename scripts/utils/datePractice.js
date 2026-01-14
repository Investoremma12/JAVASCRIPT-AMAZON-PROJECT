import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function isWeekend(date, dateString) {
	const today = dayjs();
	const days = today.add(date, dateString);
	const days5 = days.format('dddd');

	return days5;
}

export default isWeekend;
