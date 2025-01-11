let clocktiming = document.getElementById("clock");
function updatetime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let amPm = hours >= 12 ? "PM" : "AM"
    hours=hours%12||12;
    const clock = `${hours}:${minutes}:${seconds}:${amPm}`
    clocktiming.innerHTML = clock
}
setInterval(updatetime, 1000);
updatetime();
