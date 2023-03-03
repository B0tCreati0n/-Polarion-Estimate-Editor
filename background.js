import { siteUrl } from './config.js';
let extensionActive = false;

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    console.log(tab.url);
    if (tab.url.indexOf(siteUrl) != -1) {
      extensionActive = true;
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['content.js']
      });
    } else {
      extensionActive = false;
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'setcustomTextString') {
    console.log(`Setting custom label to: ${message.customTextString}`);
    document.getElementById("site-name-input").value = message.customTextString;
  }
});

//export statement
export { extensionActive };
