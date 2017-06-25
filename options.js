$("#scrollSpeed").on('change', function(){
      $("#speedInfo")[0].value=$("#scrollSpeed")[0].value;

});

// Saves options to chrome.storage
function save_options() {
  var scrollSpeed = document.getElementById('scrollSpeed').value;
  var useVim = document.getElementById('vim').checked;
  var useGamer = document.getElementById('gamer').checked;
  chrome.storage.sync.set({
    scrollSpeed: scrollSpeed,
    useVim: useVim,
    useGamer: useGamer
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 950);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value scrollSpeed = '40' and useVim = true.
  chrome.storage.sync.get({
    scrollSpeed: 40,
    useVim: true,
    useGamer: true
  }, function(items) {
    document.getElementById('scrollSpeed').value = items.scrollSpeed;
    document.getElementById('speedInfo').value = items.scrollSpeed;
    document.getElementById('vim').checked = items.useVim;
    document.getElementById('gamer').checked = items.useGamer;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
