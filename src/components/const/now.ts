import { sorted, create_date } from "./event";

interface EVENT {
	date: string;
	name: string;
}

function isBefore(event: any) {
	var day = create_date(event);
	return new Date(day) < new Date(Date(new Date().toDateString()));
}

function find_now() {
	var l = 0,
		r = sorted.length - 1;
	while (l < r) {
		var mid = (l + r) >> 1;
		if (isBefore(sorted[mid])) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return {
		date: create_date(sorted[r]),
		name: sorted[r].name,
	};
}

export const current: any = find_now();
