enum Month {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

export function formatDate(date: Date) {
	const initialDate = new Date(date);
	const month = initialDate.getMonth();
	const formattedDate = `${Month[month]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

	return formattedDate;
}
