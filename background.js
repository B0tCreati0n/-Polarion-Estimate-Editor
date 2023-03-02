let extensionActive = false;
import { userExtensionActive } from './main.js';

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    console.log(tab.url);
    if (tab.url.indexOf(siteUrl) != -1) {
      extensionActive = true;
      chrome.tabs.executeScript(tabId, {
        file: 'content.js'
      });
    } else {
      extensionActive = false;
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'setCustomLabel') {
    console.log(`Setting custom label to: ${message.customLabel}`);
    chrome.tabs.executeScript({
      code: `document.getElementById("site-name-input").value = "${message.customLabel}"`
    });
  }
});

//Debug logs
setInterval(function () {
  console.log(extensionActive);
}, 5000);
