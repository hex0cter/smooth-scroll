document.getElementById('scrollSpeed').addEventListener('change',function() {
  document.getElementById('speedInfo').value = document.getElementById('scrollSpeed').value;
});

// Saves options to chrome.storage
function save_options() {
  var scrollSpeed = document.getElementById('scrollSpeed').value;
  var useVim = document.getElementById('vim').checked;
  var useGamer = document.getElementById('gamer').checked;
  var useArrow = document.getElementById('arrow').checked;
  chrome.storage.sync.set({
    scrollSpeed: scrollSpeed,
    useVim: useVim,
    useGamer: useGamer,
    useArrow: useArrow
  }, function() {
    console.log('Options saved.');
    window.close();
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    scrollSpeed: 1,
    useVim: false,
    useGamer: false,
    useArrow: true
  }, function(items) {
    document.getElementById('scrollSpeed').value = items.scrollSpeed;
    document.getElementById('speedInfo').value = items.scrollSpeed;
    document.getElementById('vim').checked = items.useVim;
    document.getElementById('gamer').checked = items.useGamer;
    document.getElementById('arrow').checked = items.useArrow;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
