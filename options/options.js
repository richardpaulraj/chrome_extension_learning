const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const timeInput = document.getElementById("time-input");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;

  chrome.storage.sync.set(
    {
      name: name,
      notificationTime: notificationTime,
    },
    () => {
      console.log(`Name is set to ${name}`);
    }
  );
});

chrome.storage.sync.get(["name", "notificationTime"], (result) => {
  nameInput.value = result.name ?? "";
  timeInput.value = result.notificationTime ?? 1000;
});
