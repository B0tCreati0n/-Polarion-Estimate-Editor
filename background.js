let extensionActive = false;
import {userExtensionActive} from './main.js';

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    console.log(tab.url);
    if (tab.url.indexOf(siteUrl) != -1) {
      extensionActive = true;
    }
    else {
      extensionActive = false;
    }
  }

  //fetch "siteUrl" and replace with customLabel
  if (extensionActive && userExtensionActive) {
    try {
      const response = await fetch(siteUrl);
      const html = await response.text();
      if (html.includes('Rough Estimated (Days)')) {
        console.log("FOUND Rough Estimated (Days)");
        document.getElementById("site-name-input").value = customLabel;
      } else {
        console.log("did NOT find Rough Estimated (Days)");
      }
    } catch (error) {
      console.error("Error fetching website:", error);
    }
  }
});

//Debug logs
setInterval(function() {
  console.log(extensionActive);
}, 5000);