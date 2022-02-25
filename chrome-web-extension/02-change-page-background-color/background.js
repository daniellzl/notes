let defaultColor = '#3aa757';

/*
	When extension is installed:
		- set color to '#3aa757' in Chrome storage
		- console log the color
*/
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color: defaultColor });
	console.log('Defined background color set to %cgreen', `color: ${defaultColor}`);
});