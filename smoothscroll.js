// Added by Daniel Han

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character });
}

function scrollUp(settings) {
  var offset = settings.scrollSpeed * -2;
  console.log("Scrolling up by  " + offset);
  window.scrollBy(0, offset);
}

function scrollDown(settings) {
  var offset = settings.scrollSpeed * 2;
  console.log("Scrolling down by  " + offset);
  window.scrollBy(0, offset);
}
function scrollLeft(settings) {
  var offset = settings.scrollSpeed * -2;
  console.log("Scrolling left by  " + offset);
  window.scrollBy(offset, 0);
}
function scrollRight(settings) {
  var offset = settings.scrollSpeed * 2;
  console.log("Scrolling right by  " + offset);
  window.scrollBy(offset, 0);
}

function keydownTriggered(e) {
  if (scrollSettings.useArrow) {
    switch (e.key) {
      case 'ArrowDown':
        scrollDown(scrollSettings);
        break;
      case 'ArrowUp':
        scrollUp(scrollSettings);
        break;
      case 'ArrowLeft':
        scrollLeft(scrollSettings);
        break;
      case 'ArrowRight':
        scrollRight(scrollSettings);
        break;
      default:
    }
  }

  if (scrollSettings.useVim) {
    switch (e.key) {
      case 'j':
        scrollDown(scrollSettings);
        break;
      case 'k':
        scrollUp(scrollSettings);
        break;
      case 'h':
        scrollLeft(scrollSettings);
        break;
      case 'l':
        scrollRight(scrollSettings);
        break;
      default:
    }
  }

  if (scrollSettings.useGamer) {
    switch (e.key) {
      case 's':
        scrollDown(scrollSettings);
        break;
      case 'w':
        scrollUp(scrollSettings);
        break;
      case 'a':
        scrollLeft(scrollSettings);
        break;
      case 'd':
        scrollRight(scrollSettings);
        break;
      default:
    }
  }
}
