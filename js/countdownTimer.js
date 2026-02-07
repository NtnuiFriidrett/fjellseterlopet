$(document).ready(function() {
    // Date of next race
    var raceTime = new Date("April 25, 2026 12:00:00").getTime();
  
    // Degrees to turn the dials
      var degreesToRotate = -360;
  
    // Sets to current each interval, for clockface to turn on change
    var previousDays = -1;
    var previousHours = -1;
    var previousMinutes = -1;
    var previousSeconds = -1;
  
    // Finds the different countdown elements in the DOM
      var daysDisplay = document.getElementById("daysDisplay");
      var hoursDisplay = document.getElementById("hoursDisplay");
      var minutesDisplay = document.getElementById("minutesDisplay");
    var secondsDisplay = document.getElementById("secondsDisplay");
    
    // Keeps track of how much rotated each element is
      var degreesRotated = {
          "daysDisplay": 0,
          "hoursDisplay": 0,
          "minutesDisplay": 0,
          "secondsDisplay": 0
      }
  
    countdownLoop();
    setInterval(countdownLoop, 1000);
    
    function clickDisplay(event) {
      rotateDisplay(event.srcElement);
    }
    
    // Interval runs every second (1000ms)
    function countdownLoop() {
  
      // Finds now-time to get differance from race time
      var now = new Date().getTime();
      var difference = raceTime - now;
  
      // Calculates the different components of the countdown timer
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      daysDisplay.addEventListener("click", clickDisplay)
      hoursDisplay.addEventListener("click", clickDisplay)
      minutesDisplay.addEventListener("click", clickDisplay)
      secondsDisplay.addEventListener("click", clickDisplay)
  
      // Stops the interval when race started, probably not necessary...
      if(difference <= 0) {
        clearInterval(interval);
      } else {
  
        // If day or hour plural, add s to ending
        var dayText = (days == 1) ? "dag" : "dager";
        var hourText = (hours == 1) ? "time" : "timer";
  
        // Sets the text of the components with a delay to fit with the animation
        setTimeout(function(){
          daysDisplay.innerHTML = days + "<br/>" + dayText;
          hoursDisplay.innerHTML = hours + "<br/>" + hourText;
          minutesDisplay.innerHTML = minutes + "<br/>min";
          secondsDisplay.innerHTML = seconds + "<br/>sek";
        }, 300);
  
        // Rotates components 360 degrees if different from previous round
              if (days !== previousDays) { rotateDisplay(daysDisplay, degreesToRotate); }
              if (hours !== previousHours) { rotateDisplay(hoursDisplay, degreesToRotate); }
              if (minutes !== previousMinutes) { rotateDisplay(minutesDisplay, degreesToRotate); }
              if (seconds !== previousSeconds) { rotateDisplay(secondsDisplay, degreesToRotate); }
      }
  
      // Sets previous to current for next interval
      previousDays = days;
      previousHours = hours;
      previousMinutes = minutes;
      previousSeconds = seconds;
  
    }
  
    function rotateDisplay(display, degreesToRotate) {
  
          var displayId = display.id
  
          var previousRotated = degreesRotated[displayId];
          var nextRotated = previousRotated + degreesToRotate;
          degreesRotated[displayId] = nextRotated;
  
          display.style.webkitTransform = 'rotateX(' + nextRotated + 'deg)';
          display.style.mozTransform    = 'rotateX(' + nextRotated + 'deg)';
          display.style.msTransform     = 'rotateX(' + nextRotated + 'deg)';
          display.style.oTransform      = 'rotateX(' + nextRotated + 'deg)';
          display.style.transform       = 'rotateX(' + nextRotated + 'deg)';
      }
  });