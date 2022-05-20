function isBefore(a: any, b: any) {
    var daya = a.date;
    var dayb = b.date;
    return new Date(daya) < new Date(dayb);
}

export const Event:any[] = [
    {
        date: 'October 31, 2021 10:00:00',
        name: 'Halloween'
    },{
        date: 'December 9, 2021 08:00:00',
        name: '17th Thailand Olympiad in Informatics(TOI17)'
    },{
        date: 'December 25, 2021 00:00:00',
        name: 'Christmas 2021'
    },{
        date: 'January 1, 2022 00:00:00',
        name: 'New Year 2022'
    },{
		date: 'Febuary 14, 2022 00:00:00',
		name: "Valentine's Day"
	},{
		date: 'January 9, 2022 00:00:00',
		name: "POSN'64 Test"
	}, {
		date: 'June 1, 2022 00:00:00',
		name: '18th Thailand Olympiad in Informatics(TOI18)'
	}
]

export const sorted:any[] = Event.slice().sort((a, b) => {
    if(isBefore(a, b)){
        return -1;
    }
    return 1;
});
