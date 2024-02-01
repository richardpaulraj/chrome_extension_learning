const timeElem = document.getElementById("time");
const nameElem = document.getElementById("name");
const timer = document.getElementById("timer");

chrome.storage.sync.get(["name"], (result) => {
  const name = result.name ?? "???";
  nameElem.textContent = `Your name is ${name}`;
});

function updateTimeElements() {
  chrome.storage.local.get(["timer"], (result) => {
    const time = result.timer ?? 0;
    timer.textContent = `The timer is at ${time} seconds`;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElem.textContent = `The time is: ${currentTime}`;
}
updateTimeElements(); //because the setInterval doesn't immediately calls, it waits for 1 second thats y called before it calls
setInterval(updateTimeElements, 1000);

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
    timer: 0,
  });
});
