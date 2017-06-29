// Added by Daniel Han
var delay = 1; //delay in milliseconds
var timer = null;

function startScrollUp() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      y = y - parseInt(scrollSettings.scrollSpeed); //if you want to increase speed simply increase increment interval
      console.log("Scrolling to Y: " + y);
      window.scroll(x, y);
    }, delay);
  }

}

function startScrollDown() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      y = y + parseInt(scrollSettings.scrollSpeed); //if you want to increase speed simply increase increment interval
      console.log("Scrolling to Y: " + y);
      window.scroll(x, y);
    }, delay);
  }
}

function startScrollLeft() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      x = x - parseInt(scrollSettings.scrollSpeed); //if you want to increase speed simply increase increment interval
      console.log("Scrolling to X: " + x);
      window.scroll(x, y);
    }, delay);
  }
}

function startScrollRight() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      x = x + parseInt(scrollSettings.scrollSpeed); //if you want to increase speed simply increase increment interval
      console.log("Scrolling to X: " + x);
      window.scroll(x, y);
    }, delay);
  }
}

function keydownTriggered(e) {
  if (scrollSettings.useArrow) {
    switch (e.key) {
      case 'ArrowDown':
        startScrollDown();
        break;
      case 'ArrowUp':
        startScrollUp();
        break;
      case 'ArrowLeft':
        startScrollLeft();
        break;
      case 'ArrowRight':
        startScrollRight();
        break;
      default:
    }
  }

  if (scrollSettings.useVim) {
    switch (e.key) {
      case 'j':
        startScrollDown();
        break;
      case 'k':
        startScrollUp();
        break;
      case 'h':
        startScrollLeft();
        break;
      case 'l':
        startScrollRight();
        break;
      default:
    }
  }

  if (scrollSettings.useGamer) {
    switch (e.key) {
      case 's':
        startScrollDown();
        break;
      case 'w':
        startScrollUp();
        break;
      case 'a':
        startScrollLeft();
        break;
      case 'd':
        startScrollRight();
        break;
      default:
    }
  }
}

function keyupTriggered(e) {
  clearInterval(timer);
  timer = null;
}
