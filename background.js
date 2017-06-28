chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    console.log("loading page complete");
    chrome.tabs.get(tabId, function(tab) {
      chrome.storage.sync.get(
        {'scrollSpeed': 1,
        'useVim': false,
        'useGamer': false,
        'useArrow': true}
        , function(settings) {
          chrome.tabs.executeScript(tabId, {code: "var scrollSettings = " + JSON.stringify(settings) + ";", allFrames: false}, function() {
            chrome.tabs.executeScript(tabId, {file: "smoothscroll.js", allFrames: false}, function () {
              chrome.tabs.executeScript(tabId, {code: "window.removeEventListener('keydown', keydownTriggered);" , allFrames: false}, function() {
                chrome.tabs.executeScript(tabId, {code: "window.addEventListener('keydown', keydownTriggered);" , allFrames: false}, function() {
                  chrome.tabs.executeScript(tabId, {code: "console.log('new event listener registered'); ", allFrames: false});
                });
              });
            });
          });
      });
    });
  }
});

chrome.tabs.onActivated.addListener( function (activeInfo) {
  console.log("tab activated");

  chrome.tabs.get(activeInfo.tabId, function(tab) {
    chrome.storage.sync.get(
      {'scrollSpeed': 1,
      'useVim': false,
      'useGamer': false,
      'useArrow': true}
      , function(settings) {
        chrome.tabs.executeScript(activeInfo.tabId, {code: "scrollSettings = " + JSON.stringify(settings), allFrames: false}, function() {
          chrome.tabs.executeScript(activeInfo.tabId, {code: "window.removeEventListener('keydown', keydownTriggered);" , allFrames: false}, function () {
            chrome.tabs.executeScript(activeInfo.tabId, {code: "window.addEventListener('keydown', keydownTriggered);" , allFrames: false}, function() {
              chrome.tabs.executeScript(activeInfo.tabId, {code: "console.log('new event listener registered'); ", allFrames: false});
            });
          });
        });
    });
  });
});
