import { userExtensionActive, extensionActive, customLabel } from './config.js';

if (userExtensionActive && extensionActive) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'setCustomLabel' && userExtensionActive && extensionActive) {
      console.log(`Setting custom label to: ${message.customLabel}`);
      customLabel = message.customLabel;
      document.body.innerText = document.body.innerText.replace(/Rough Estimate \(Days\)/gi, customLabel);
    }
  });
}
