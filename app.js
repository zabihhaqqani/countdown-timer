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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date();
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay() + 10
let futureDate = new Date(tempYear, tempMonth, tempDay, 11, 30, 0)

const year = futureDate.getFullYear()
const date = futureDate.getDate()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()]


giveaway.textContent = `Giveaway ends on${day}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date()
  const timeDiff = futureTime - today
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000

  let day = Math.floor(timeDiff / oneDay)
  let hour = Math.floor((timeDiff % oneDay / oneHour))
  let mins = Math.floor((timeDiff % oneHour / oneMin))
  let sec = Math.floor((timeDiff % oneMin / oneSec))

  function format(item) {

    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  const values = [day, hour, mins, sec]
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

  if (timeDiff < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h3 class = "expired">this giveaway has ended<h3>`
  }
}

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()