import { sorted } from "./event";
import { gt } from "binary-search-bounds";

function isBefore(Event: any){
    var day = Event.date;
    return new Date(day) < new Date(new Date().toDateString());
}

function find_now(){
	var l = 0, r = sorted.length - 1;
	while(l < r){
		var mid = (1 + l + r) >> 1;
		if(isBefore(sorted[mid])){
			r = mid - 1;
		}
		else{
			l = mid;
		}
	}
	return sorted[l];
}

export const current:any = find_now()
