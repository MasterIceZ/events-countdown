export function create_date(x: any) {
	const now_year = new Date().getFullYear();
	const next_year = now_year + 1;
	var txt = "";
	if (x.year === "yearly") {
		var current = x.month + " " + x.day + ", " + now_year;
		var next = x.month + " " + x.day + ", " + next_year;
		if (new Date(current) < new Date().toDateString()) {
			txt = next;
		} else {
			txt = current;
		}
	} else {
		txt = x.month + " " + x.day + ", " + now_year;
	}
	return txt;
}

function isBefore(a: any, b: any) {
	var daya = create_date(a);
	var dayb = create_date(b);
	return new Date(daya) < new Date(dayb);
}

export const Event: any[] = [
	{
		day: "31",
		month: "October",
		year: "yearly",
		name: "Halloween",
	},
	{
		day: "9",
		month: "December",
		year: "2021",
		name: "17th Thailand Olympiad in Informatics(TOI17)",
	},
	{
		date: "25",
		month: "December",
		year: "2021",
		name: "Christmas 2021",
	},
	{
		day: "1",
		month: "January",
		year: "yearly",
		name: "New Year 2022",
	},
	{
		day: "14",
		month: "Febuary",
		year: "yearly",
		name: "Valentine's Day",
	},
	{
		day: "9",
		month: "January",
		year: "2022",
		name: "POSN'64 Test",
	},
	{
		day: "1",
		month: "June",
		year: "2022",
		name: "18th Thailand Olympiad in Informatics(TOI18)",
	},
];

export const sorted: any[] = Event.slice().sort((a, b) => {
	if (isBefore(a, b)) {
		return -1;
	}
	return 1;
});
