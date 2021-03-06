chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.get(tabId, function(tab) {
      chrome.storage.sync.get({'scrollSpeed': 1,
        'useVim': false,
        'useGamer': false,
        'useArrow': true}, function(settings) {
          chrome.tabs.executeScript(tabId, {code: "var scrollSettings = " + JSON.stringify(settings) + ";", allFrames: false}, function() {
            chrome.tabs.executeScript(tabId, {file: "smoothscroll.js", allFrames: false}, function () {
              chrome.tabs.executeScript(tabId, {code: "window.removeEventListener('keydown', keydownTriggered); window.removeEventListener('keyup', keyupTriggered);window.addEventListener('keydown', keydownTriggered);window.addEventListener('keyup', keyupTriggered);", allFrames: false});
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
      , function(settings) {
        chrome.tabs.executeScript({code: "typeof scrollSettings"}, function(result) {
          if (result[0] === 'undefined') {
            chrome.tabs.executeScript(activeInfo.tabId, {file: "smoothscroll.js", allFrames: false}, function () {
              chrome.tabs.executeScript(activeInfo.tabId, {code: "scrollSettings = " + JSON.stringify(settings) + ";", allFrames: false}, function() {
                chrome.tabs.executeScript(activeInfo.tabId, {code: "window.removeEventListener('keydown', keydownTriggered); window.removeEventListener('keyup', keyupTriggered);window.addEventListener('keydown', keydownTriggered);window.addEventListener('keyup', keyupTriggered);", allFrames: false});
              });
            });
          } else {
            chrome.tabs.executeScript(activeInfo.tabId, {code: "scrollSettings = " + JSON.stringify(settings) + ";", allFrames: false}, function() {
              chrome.tabs.executeScript(activeInfo.tabId, {code: "window.removeEventListener('keydown', keydownTriggered); window.removeEventListener('keyup', keyupTriggered); window.addEventListener('keydown', keydownTriggered); window.addEventListener('keyup', keyupTriggered);" , allFrames: false});
            });
          }
        });
    });
  });
});
