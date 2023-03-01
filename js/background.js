chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == "complete") {
      console.log(tab.url);
      if (tab.url.indexOf(siteName) != -1) {
        chrome.action.enable(extensionActive);
      }
      else {
        chrome.action.disable({tabId: tab.id});
      }
    }
  });