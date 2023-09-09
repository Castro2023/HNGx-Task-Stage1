currentDayOfWeek=()=> {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];

    dayOfWeekElement.textContent = ` ${dayOfWeek}`;
};
currentDayOfWeek();
currentTimeMillis=()=> {
    const millisTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentTimeMillis = new Date().getTime();
    millisTimeElement.textContent = ` ${currentTimeMillis}`;
};
currentTimeMillis();
setInterval(currentTimeMillis, 100);