let userExtensionActive = false;
let customLabel = "Rough Estimate (Days)";

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
    console.log(`Extention is now active`);
  } else {
    userExtensionActive = true;
    activateButton.value = "Deactivate";
    console.log(`Extention is now active`); 
  }
});   
    
// set customLabel button
setButton.addEventListener("click", function() {
  customLabel = customLabelInput.value;
  console.log(`Custom label has been set to: ${customLabel}`);
});

// set siteUrl button
let setSiteUrlButton = document.querySelector('#setsiteUrl');
setSiteUrlButton.addEventListener("click", function() {
  let newSiteUrl = siteUrlInput.value;
  console.log(`Setting siteUrl to: ${newSiteUrl}`);
});


//export statements
export { userExtensionActive, customLabel };
