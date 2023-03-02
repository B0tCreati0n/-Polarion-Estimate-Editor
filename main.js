let siteUrl = "";
let userExtensionActive = false;
import {customLabel} from './config.js';

//get the config file things 
try {
  const config = require('./config');
  const siteUrl = config.siteUrl;
  const customLabel = config.customLabel;
  console.log(`Loaded config: siteUrl=${siteUrl}, customLabel=${customLabel}`);
} catch (error) {
  console.error('Failed to load config:', error);
}


  //all buttons code
  let activateButton = document.querySelector('#activate');
  let setButton = document.querySelector('#set');
  let customLabelInput = document.querySelector('#customlabel');
  let siteUrlInput = document.querySelector('#siteUrl');

  //activateButton
    activateButton.addEventListener("click", function() {
      if (userExtensionActive) {
        activateButton.value = "Activate";
        userExtensionActive = false; 
      } else {
        userExtensionActive = true;
        activateButton.value = "Deactivate"; 
      }
    });   
    
  //setButton
  setButton.addEventListener("click", function() {
    customLabel = customLabelInput.value;
  });

  //siteUrlInput
  siteUrlInput.value = siteUrl;

  //setsiteUrl
  let setsiteUrlButton = document.querySelector('#setsiteUrl');
  setsiteUrlButton.addEventListener("click", function() {
    siteUrl = siteUrlInput.value;
  });

//export satements
 export {userExtensionActive};

//Debug logs
setInterval(function() {
  console.log(siteUrl);
  console.log(extensionActive);
  console.log(userExtensionActive);
  console.log(customLabel);
}, 5000);