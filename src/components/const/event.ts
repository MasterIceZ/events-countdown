function isBefore(a: any, b: any) {
    var daya = a.date;
    var dayb = b.date;
    return new Date(daya) < new Date(dayb);
}

export const Event:any[] = [
    {
        date: 'October 31, 2021 10:00:00',
        name: 'Halloween'
    },
    {
        date: 'December 9, 2021 08:00:00',
        name: '17th Thailand Olympiad in Informatics(TOI17)'
    },
    {
        date: 'January 1, 2022 00:00:00',
        name: 'New Year 2022'
    }
]

export const sorted:any[] = Event.slice().sort((a, b) => {
    if(isBefore(a, b)){
        return -1;
    }
    return 1;
});