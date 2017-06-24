chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.get(tabId, function(tab) {
      chrome.tabs.executeScript(tabId, {file: "smoothscroll.js", allFrames: true});
    });
  }
});
