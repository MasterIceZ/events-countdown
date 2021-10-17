import { sorted } from "./event";

function isBefore(Event: any){
    var day = Event.date;
    return new Date(day) < new Date(new Date().toDateString());
}

function find_now(){
    for(var i=0; i<sorted.length; ++i){
        if(!isBefore(sorted[i])){
            return sorted[i];
        }
    }
}

export const now:any = find_now()