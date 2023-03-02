import {siteName} from "./config.js";

let extensionActive = false;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    console.log(tab.url);
    if (tab.url.indexOf(siteName) != -1) {
      extensionActive = true;
    }
    else {
      extensionActive = false;
    }
  }
});

export { extensionActive };
