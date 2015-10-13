chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://en.wikipedia.org/w/index.php?search="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search Wikipedia for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
