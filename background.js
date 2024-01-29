chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"], (result) => {
    const time = result.timer ?? 0;
    const isRunning = result.isRunning ?? true;

    if (!isRunning) return;

    chrome.storage.local.set({
      timer: time + 1,
    });

    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });

    chrome.storage.sync.get(["notificationTime"], (result) => {
      const notificationTime = result.notificationTime ?? 1000;
      console.log(notificationTime);

      if (time % notificationTime == 0) {
        //now we have setted it manually but can let the user set it by themslef throught he option page
        this.registration.showNotification("Chrome Timer Extension", {
          body: `${notificationTime} second has passed `,
          icon: "icon.png",
        });
      }
    });
  });
});

console.log(this);
