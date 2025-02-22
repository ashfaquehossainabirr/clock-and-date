const displayHour = document.querySelector(".hour")
const displayMinute = document.querySelector(".minute")
const displaySecond = document.querySelector(".second")
const displayMeridiem = document.querySelector(".meridiem")
const displayDate = document.querySelector(".date")

function updateClock() {
    const now = new Date()

    let hours = now.getHours()
    const meridiem = hours >= 12 ? "PM" : "AM"
    // hours = hours % 12 || 12
    hours = hours > 12 ? hours - 12 : hours
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)

    displayHour.innerHTML = hours
    displayMinute.innerHTML = minutes
    displaySecond.innerHTML = seconds

    displayMeridiem.innerHTML = meridiem
}

setInterval(updateClock, 1000)


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

function updateDate() {
    const date = new Date().getDate()
    let month = new Date().getMonth()
    month = months[month]
    const year = new Date().getFullYear()
    let day = new Date().getDay()
    day = days[day]

    displayDate.innerHTML = `${day}, ${date} ${month} ${year}`
}

updateDate()