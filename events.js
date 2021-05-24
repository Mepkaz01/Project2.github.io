const events = [
    {
        eventId: "1", 
        uuid: "001", //uuid
        title: "C4G Class", //varchar(100)
        location: "Zoom Meeting", //varchar (100)       
        startDate: "2021-05-24", //date
        startTime: "10:00 AM", //time
        endDate: "2021-05-24", //date
        endTime: "6:00 PM", //time
        timeZone: "EST", //varchar(10)
        calendarId: "01"
    },

    {
        eventId: "2",
        uuid: "001",
        title: "Doctor's Appointment",
        location: "Doc's Office",        
        startDate: "2021-05-25",
        startTime: "9:00 AM",
        endDate: "2021-05-25",
        endTime: "10:00 AM",
        timezone: "EST",
        calendarId: "01"
    }

]

module.exports = events;