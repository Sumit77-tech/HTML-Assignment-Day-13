let time = 5;

// Set the interval and store its reference in a variable
let countdown = setInterval(() => {
  if (time >= 0) {
    console.log(`Time left: ${time} seconds`);
    time--;
  } else {
    console.log('Countdown finished!');
    clearInterval(countdown);  // Clear the interval when the countdown finishes
  }
}, 1000);
