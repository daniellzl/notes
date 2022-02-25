let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

/*
	On button click
		- remove styling from previous selected button
		- get the clicked button's color
		- store it in Chrome storage
		- mark the clicked button as "selected"
*/
function handleButtonClick(event) {
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

/*
	When options page loads
		- get current stored color
		- take in a list of button colors
			- create a new button
			- if button color is same as current stored color
				- mark it as "selected"
			- add handleButtonClick click handler to button
			- append button to options page
*/
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;
    for (let buttonColor of buttonColors) {
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

constructOptions(presetButtonColors);
