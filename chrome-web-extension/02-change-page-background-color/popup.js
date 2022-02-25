let button = document.getElementById("changeColor");

/*
	When extension is popped up
		- get the color set in background.js
		- change the button color to the retrieved color
*/
chrome.storage.sync.get("color", ({ color }) => {
  button.style.backgroundColor = color;
});

/*
	When button clicked
		- get the current tab
		- run the function setPageBackgroundColor on current tab page only
*/
button.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
