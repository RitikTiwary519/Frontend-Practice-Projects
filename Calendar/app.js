window.onload = () => {
    const month = document.querySelector("#month");
    const date = document.querySelector("#date");
    const days = document.querySelector("#days");

    // Current month and year
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();

    // First day of the month (weekday)
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Day of the week (0 = Sunday, 6 = Saturday)

    // Last day of the month (number of days in the month)
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate(); // Day of the month (e.g., 31 for January)

    // Month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    // Update the month and date in the HTML
    month.innerText = months[currentMonth];
    date.innerText = new Date().toDateString();

    // Generate calendar days
    let result = "";

    // Add empty divs for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        result += '<div class="empty"></div>';
    }

    // Add divs for each day of the month
    for (let i = 1; i <= lastDay; i++) {
        if(i===currentDate)
        {
            result+= `<div class="current">${i}</div>`;
        }
        else
        {

            result += `<div>${i}</div>`;
        }
    }

    // Inject the days into the calendar
    days.innerHTML = result;
};
