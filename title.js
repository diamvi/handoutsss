var originalTitle;
var offFocusTitle = "stop procrastinating 💀";

var interval;

document.addEventListener('DOMContentLoaded', function() {
  originalTitle = document.title;
});

document.addEventListener('visibilitychange', event => {
  if(document.hidden) {
    // Document is hidden
    document.title = offFocusTitle;
    
    let swapState = "old";
    interval = setInterval(function () {
      if(swapState == "old") {
        swapState = "new";
        document.title = offFocusTitle;
      }
      else if (swapState == "new") {
        swapState = "old";
        document.title = originalTitle;
      }
    }, 1300);
  } else {
    // Document is not hidden
    document.title = originalTitle;
    clearInterval(interval);
  }
});
