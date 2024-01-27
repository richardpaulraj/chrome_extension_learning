const timeElem = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();

timeElem.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);
