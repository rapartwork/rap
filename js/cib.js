// JavaScript Document
const icibContent = document.getElementById("icib_content");
const infoBtns = document.querySelectorAll(".info_btn");
const popupContent = document.querySelectorAll(".popup_content");
const toggleBtn = document.getElementById("toggle_btn");
const infoBtnsContainer = document.getElementById("info_btns");
const reloadBtn = document.getElementById("reload_btn");
const introText = document.getElementById("intro_text");

// Loop through all the info buttons. 
for (let i=0; i<infoBtns.length; i++) {
	
	// Set the attributes for elements.
	infoBtns[i].setAttribute("aria-expanded", "false");
	infoBtns[i].setAttribute("aria-label", "Information icon");
	popupContent[i].setAttribute("aria-hidden", "true");
	
	
	// Add a click event listener to each info button.
	infoBtns[i].addEventListener("click", () => {
		
		// Create a variable containing the popup of the button selected.
		var popupToShow = document.querySelector("#info_popup_" +i);
		
		// If the popup of the selected button is hidden, show it.  
		if (popupToShow.classList.contains("hide")) {
			popupToShow.classList.remove("hide");
			
			// Add a class of "selected" to the selected button and set the aria attributes for elements.
			infoBtns[i].classList.add("viewed");
			infoBtns[i].setAttribute("aria-expanded", "true");
			infoBtns[i].setAttribute("aria-label", "Information icon, viewed");
			popupContent[i].setAttribute("aria-hidden", "false");
			
			// Add a delayed click event listener to the whole image.
			setTimeout( () => { 
				icibContent.addEventListener('click', function closePopup() {
					
					// Check if the click was on the close button
					if (!popupToShow.contains(event.target) || event.target.classList.contains('close_popup')) {
					
					// Hide the popup and set the aria attributes for elements. 
					popupToShow.classList.add("hide");
					infoBtns[i].setAttribute("aria-expanded", "false");
					popupContent[i].setAttribute("aria-hidden", "true");
					
					//Remove the event listener from the image.
					icibContent.removeEventListener('click', closePopup);
					}
				})
			}, 200);
		} else {
			
			// If the popup of the selected button is shown, hide it.
			popupToShow.classList.add("hide");
		}

	})

}

// Toggles the hiding of the info buttons (MW)
toggleBtn.addEventListener("click", () => {
	infoBtnsContainer.classList.toggle("hide");
})

// Reloads the page when reloadBtn is selected (MW) 
reloadBtn.addEventListener("click", () => {
	window.location.reload();
})

// Hides the intro text when anywhere on the page is selected (MW)
icibContent.addEventListener("click", hideIntroText);	

function hideIntroText() {
	introText.style.display = "none";
	icibContent.removeEventListener("click", hideIntroText);
}

// Stops the intro text from being hidden when selected (MW)
introText.addEventListener("click", (e) => {
	e.stopPropagation();
})
	