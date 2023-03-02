import { userExtensionActive, extensionActive } from './config.js';

if (userExtensionActive && extensionActive) {
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'setCustomLabel' && userExtensionActive && extensionActive) {
      console.log(`Setting custom label to: ${message.customLabel}`);
      document.getElementById("site-name-input").value = message.customLabel;
    }
  });
}