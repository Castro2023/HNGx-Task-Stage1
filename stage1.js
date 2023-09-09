currentDayOfWeek=()=> {
    const dayOfWeekElement = document.getElementById("currentDayOfTheWeek");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];

    dayOfWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
}
currentDayOfWeek();

currentTimeMillis=()=> {
    const millisTimeElement = document.getElementById("currentUTCTime");
    const currentTimeMillis = new Date().getTime();
    millisTimeElement.textContent = `Current UTC Time: ${currentTimeMillis}`;
}
currentTimeMillis();