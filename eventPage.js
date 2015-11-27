chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  console.log('Page uses History API');
});
