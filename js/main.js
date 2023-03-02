let siteName = "";
let userExtensionActive = true;
let customLabel = "";
import { extensionActive } from "./background";

fetch('config.json')
  .then(response => response.json())
  .then(data => {
    siteName = data.siteName;
    customLabel = data.customLabel;
    console.log(`Loaded config: siteName=${siteName}, customLabel=${customLabel}`);
  })
  .catch(error => {
    console.error('Failed to load config:', error);
  });

  //all buttons code
  let activateButton = document.querySelector('#activate');
  let setButton = document.querySelector('#set');
  let customLabelInput = document.querySelector('#customlabel');
  let siteNameInput = document.querySelector('#sitename');

  //activateButton
  activateButton.addEventListener("click", function() {
      if (extensionActive) {
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

  //fetch "siteName" and replace with customLabel
  if (extensionActive && userExtensionActive) {
  fetch(siteName)
  .then(response => response.text())
  .then(html => {
    if (html.includes('Rough Estimated (Days)')) {
      console.log("FOUND Rough Estimated (Days)");
      document.getElementById("site-name-input").value = customLabel;
    } else {
      console.log("did NOT find Rough Estimated (Days)");
    }
  })
  .catch(error => {
    console.error("Error fetching website:", error);
  });
};

//Debug log
setInterval(function() {
  console.log(siteName);
  console.log(extensionActive);
  console.log(userExtensionActive);
  console.log(customLabel);
}, 5000);