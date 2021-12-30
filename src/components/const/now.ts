import { sorted } from "./event";

interface EVENT{
	date: string;
	name: string;
}

function isBefore(event: string){
    var day = event;
    return new Date(day) < new Date(new Date().toDateString());
}

function find_now(){
	var l = 0, r = sorted.length - 1;
	while(l < r){
		var mid = (l + r) >> 1;
		console.log(mid);
		if(isBefore(sorted[mid].date)){
			l = mid + 1;
		}
		else{
			r = mid;
		}
	}
	console.log(sorted[r]);
	return sorted[r];
}

export const current:any = find_now()
