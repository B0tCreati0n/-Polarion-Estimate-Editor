let siteUrl = "";
let userExtensionActive = false;
import {customLabel} from './config.js';

//get the config file things 
import { siteUrl, customLabel } from './config.js';

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

  //setsiteUrl
  setButton.addEventListener("click", function() {
    let newSiteUrl = siteUrlInput.value;
    console.log(`Setting siteUrl to: ${newSiteUrl}`);
  });
  

//export satements
 export {userExtensionActive};

//Debug logs
setInterval(function() {
  console.log(userExtensionActive);
}, 5000);
