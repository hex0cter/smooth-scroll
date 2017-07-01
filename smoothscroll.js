// Added by Daniel Han
var delay = 1; //delay in milliseconds
var timer = null;

function startScrollUp() {
  console.log("startScrollUp.")

  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      y = y - parseInt(scrollSettings.scrollSpeed);
      window.scroll(x, y);
    }, delay);
  }

}

function startScrollDown() {
  console.log("startScrollDown.")

  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      y = y + parseInt(scrollSettings.scrollSpeed);
      window.scroll(x, y);
    }, delay);
  }
}

function startScrollLeft() {
  console.log("startScrollLeft.")

  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      x = x - parseInt(scrollSettings.scrollSpeed);
      window.scroll(x, y);
    }, delay);
  }
}

function startScrollRight() {
  console.log("startScrollRight.")

  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    timer = setInterval(function() {
      x = x + parseInt(scrollSettings.scrollSpeed);
      window.scroll(x, y);
    }, delay);
  }
}

function keydownTriggered(e) {
  var inputTags = ['INPUT', 'TEXTAREA'];

  if(inputTags.indexOf(e.target.tagName) > -1) {
        return;
  }

  if (scrollSettings.useArrow) {
    switch (e.key) {
      case 'ArrowDown':
        startScrollDown();
        return;
      case 'ArrowUp':
        startScrollUp();
        return;
      case 'ArrowLeft':
        startScrollLeft();
        return;
      case 'ArrowRight':
        startScrollRight();
        return;
      default:
    }
  }

  if (scrollSettings.useVim) {
    switch (e.key) {
      case 'j':
        startScrollDown();
        return;
      case 'k':
        startScrollUp();
        return;
      case 'h':
        startScrollLeft();
        return;
      case 'l':
        startScrollRight();
        return;
      default:
    }
  }

  if (scrollSettings.useGamer) {
    switch (e.key) {
      case 's':
        startScrollDown();
        return;
      case 'w':
        startScrollUp();
        return;
      case 'a':
        startScrollLeft();
        return;
      case 'd':
        startScrollRight();
        return;
      default:
    }
  }
  console.log("nothing to do.")
}

function keyupTriggered(e) {
  clearInterval(timer);
  timer = null;
}
