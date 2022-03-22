const startingTime = Math.floor(Math.random() * 60)
let time = startingTime * 60

const count = document.getElementById("countdownTimer")
setInterval(updateTimer, 1000)
function updateTimer() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds
    time--
    if (minutes < 0) {
        count.innerHTML = `shipping lost!`
    } else {
        count.innerHTML = `${minutes}:${seconds}`
    }

}