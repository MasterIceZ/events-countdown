import { sorted, create_date } from "./event";

interface EVENT {
	date: string;
	name: string;
}

function isBefore(event: any) {
	var day = create_date(event);
	return new Date(day) < new Date(new Date().toDateString());
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

function find_next() {
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
	r = r + 1;
	return {
		date: create_date(sorted[r]),
		name: sorted[r].name,
	};
}

export const current: any = find_now();
export const next_time: any = find_next();
