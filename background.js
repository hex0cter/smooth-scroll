chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.get(tabId, function(tab) {
      chrome.storage.sync.get(
        {'scrollSpeed': 1,
        'useVim': false,
        'useGamer': false,
        'useArrow': true}
        , function(items) {
          var settings = items;
          chrome.tabs.executeScript(tabId, {code: "var scrollSettings = " + JSON.stringify(settings) + ";", allFrames: true}, function() {
            chrome.tabs.executeScript(tabId, {file: "smoothscroll.js", allFrames: true}, function () {
              chrome.tabs.executeScript(tabId, {code: "window.removeEventListener('keydown', keydownTriggered);" , allFrames: true}, function() {
                chrome.tabs.executeScript(tabId, {code: "window.addEventListener('keydown', keydownTriggered);" , allFrames: true}, function() {
                  chrome.tabs.executeScript(tabId, {code: "console.log('new event listener registered'); ", allFrames: true});
                });
              });
            });
          });
      });
    });
  }
});

chrome.tabs.onActivated.addListener( function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    chrome.storage.sync.get(
      {'scrollSpeed': 1,
      'useVim': false,
      'useGamer': false,
      'useArrow': true}
      , function(items) {
        var settings = items;
        chrome.tabs.executeScript(activeInfo.tabId, {code: "var scrollSettings = " + JSON.stringify(settings), allFrames: true}, function() {
          console.log("updated scrollSettings");
          chrome.tabs.executeScript(activeInfo.tabId, {file: "smoothscroll.js", allFrames: true}, function() {
            console.log("rerun the script in the active tab");
            chrome.tabs.executeScript(activeInfo.tabId, {code: "window.removeEventListener('keydown', keydownTriggered);" , allFrames: true}, function () {
              console.log("removed the existing event listener");
              chrome.tabs.executeScript(activeInfo.tabId, {code: "window.addEventListener('keydown', keydownTriggered);" , allFrames: true}, function() {
                console.log("added the existing event listener");
                chrome.tabs.executeScript(activeInfo.tabId, {code: "console.log('new event listener registered'); ", allFrames: true});
              });
            });
          });
        });
    });
  });
});
