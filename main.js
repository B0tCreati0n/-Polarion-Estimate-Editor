let siteName = "";
let userExtensionActive = false;
import {customLabel} from './config.js';
import { extensionActive } from "./background.js";

//get the config file things 
try {
  const config = require('./config');
  const siteName = config.siteName;
  const customLabel = config.customLabel;
  console.log(`Loaded config: siteName=${siteName}, customLabel=${customLabel}`);
} catch (error) {
  console.error('Failed to load config:', error);
}


  //all buttons code
  let activateButton = document.querySelector('#activate');
  let setButton = document.querySelector('#set');
  let customLabelInput = document.querySelector('#customlabel');
  let siteNameInput = document.querySelector('#sitename');

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

  //siteNameInput
  siteNameInput.value = siteName;

  //setSiteName
  let setSiteNameButton = document.querySelector('#setSiteName');
  setSiteNameButton.addEventListener("click", function() {
    siteName = siteNameInput.value;
  });

//Debug logs
setInterval(function() {
  console.log(siteName);
  console.log(extensionActive);
  console.log(userExtensionActive);
  console.log(customLabel);
}, 5000);