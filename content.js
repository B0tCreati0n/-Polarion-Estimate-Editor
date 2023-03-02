chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'setCustomLabel') {
      console.log(`Setting custom label to: ${message.customLabel}`);
      document.getElementById("site-name-input").value = message.customLabel;
    }
  });
  