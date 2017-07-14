// Added by Daniel Han
var delay = 1; //delay in milliseconds
var timer = null;

function scrollTo(x, y) {
  var maxWidth = document.body.scrollWidth;
  var maxHeight = document.body.scrollHeight;

  if (x < 0 || y < 0 || x > maxWidth || y > maxHeight) {
    return;
  }

  console.log("scoll to x = " + x + ", y = " + y);
  window.scroll(x, y);
}

function startScrollUp() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    console.log("startScrollUp.")
    timer = setInterval(function() {
      y = y - parseInt(scrollSettings.scrollSpeed);
      scrollTo(x, y);
    }, delay);
  }

}

function startScrollDown() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    console.log("startScrollDown.")
    timer = setInterval(function() {
      y = y + parseInt(scrollSettings.scrollSpeed);
      scrollTo(x, y);
    }, delay);
  }
}

function startScrollLeft() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    console.log("startScrollLeft.")
    timer = setInterval(function() {
      x = x - parseInt(scrollSettings.scrollSpeed);
      scrollTo(x, y);
    }, delay);
  }
}

function startScrollRight() {
  var y = document.scrollingElement.scrollTop;
  var x = document.scrollingElement.scrollLeft;
  if (timer == null) {
    console.log("startScrollRight.")
    timer = setInterval(function() {
      x = x + parseInt(scrollSettings.scrollSpeed);
      scrollTo(x, y);
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
      case 'J':
        startScrollDown();
        return;
      case 'k':
      case 'K':
        startScrollUp();
        return;
      case 'h':
      case 'H':
        startScrollLeft();
        return;
      case 'l':
      case 'L':
        startScrollRight();
        return;
      default:
    }
  }

  if (scrollSettings.useGamer) {
    switch (e.key) {
      case 's':
      case 'S':
        startScrollDown();
        return;
      case 'w':
      case 'W':
        startScrollUp();
        return;
      case 'a':
      case 'A':
        startScrollLeft();
        return;
      case 'd':
      case 'D':
        startScrollRight();
        return;
      default:
    }
  }
  console.log("Not an interested key press: " + e.key);
}

function stopScrolling() {
  console.log("stop scrolling.")
  clearInterval(timer);
  timer = null;
}

function keyupTriggered(e) {
  stopScrolling();
}
