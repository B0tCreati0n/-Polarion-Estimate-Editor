let siteUrl = "";
let userExtensionActive = false;
import {customLabel} from './config.js';

//get the config file things 
try {
  const config = import('./config');
  let siteUrl = config.siteUrl;
  let customLabel = config.customLabel;
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

  //setsiteUrl
  setButton.addEventListener("click", function() {
    let newCustomLabel = customLabelInput.value;
    // Use the new variable instead of reassigning the constant
    console.log(`Setting custom label to: ${newCustomLabel}`);
  });
  

//export satements
 export {userExtensionActive};

//Debug logs
setInterval(function() {
  console.log(userExtensionActive);
}, 5000);