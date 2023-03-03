import { userExtensionActive, extensionActive, customTextString } from './config.js';

if (userExtensionActive && extensionActive) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'setcustomTextString' && userExtensionActive && extensionActive) {
      console.log(`Setting custom label to: ${message.customTextString}`);
      customTextString = message.customTextString;
      document.body.innerText = document.body.innerText.replace(/Example Domain/gi, customTextString);
    }
  });
}
