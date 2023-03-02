//get the config file things
import { siteUrl, customLabel } from './config.js';
let userExtensionActive = false;

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
    
// setButton
setButton.addEventListener("click", function() {
  customLabel = customLabelInput.value;
});

// setSiteUrl button
let setSiteUrlButton = document.querySelector('#setsiteUrl');
setSiteUrlButton.addEventListener("click", function() {
  let newSiteUrl = siteUrlInput.value;
  console.log(`Setting siteUrl to: ${newSiteUrl}`);
  siteUrl = newSiteUrl;
});


//export statements
export {userExtensionActive};

//Debug logs
setInterval(function() {
  console.log(userExtensionActive);
}, 5000);
