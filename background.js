import { siteName } from "./config.js";
import { userExtensionActive } from "./main.js"
import { customLabel } from "./config.js";

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

  //fetch "siteName" and replace with customLabel
  if (extensionActive && userExtensionActive) {
    try {
      const response = await fetch(siteName);
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
  };

