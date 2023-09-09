function currentDayOfWeek() {
    const dayOfWeekElement = document.getElementById("currentDayOfTheWeek");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];

    dayOfWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
}
currentDayOfWeek();

function currentTimeMillis() {
    const millisTimeElement = document.getElementById("currentUTCTime");
    const currentTimeMillis = new Date().getTime();
    millisTimeElement.textContent = `Current UTC Time: ${currentTimeMillis}`;
}
currentTimeMillis();


/* function convertMillisToReadableTime() {
    const currentTimeMillisElement = document.getElementById("currentTimeMillis");

    // Get the current UTC time in milliseconds
    const currentTimeMillis = new Date().getTime();

    // Create a new Date object using the UTC milliseconds
    const currentTime = new Date(currentTimeMillis);

    // Format the date and time as a readable string (adjust the format as needed)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };
    const formattedTime = currentTime.toLocaleString('en-US', options);

    currentTimeMillisElement.textContent = `Current UTC Time: ${formattedTime}`;
}

// Call the function to display the converted time immediately
convertMillisToReadableTime(); */