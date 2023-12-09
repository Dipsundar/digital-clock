//variables ......

let message = document.querySelector("p");
let showButton = document.querySelector("button");

showButton.addEventListener("click", startClock);

try {
  console.log("inside try block");
  console.log(x);
} catch (error) {
  console.log("inside catch blcok");
  console.log(error);
}

function startClock() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let text = "AM";
  if (hour < 12) {
    text = "AM";
  } else {
    text = "PM";
  }

  switch (hour) {
    case 13:
      hour = 1;
      break;

    case 14:
      hour = 2;
      break;

    case 15:
      hour = 3;
      break;

    case 16:
      hour = 4;
      break;

    case 17:
      hour = 5;
      break;
    case 18:
      hour = 6;
      break;

    case 19:
      hour = 7;
      break;

    case 20:
      hour = 8;
      break;

    case 21:
      hour = 9;
      break;

    case 22:
      hour = 10;
      break;

    case 23:
      hour = 11;
      break;

    case 24:
      hour = 0;
      break;

    default:
      break;
  }
  hour = timeFormat(hour);
  minutes = timeFormat(minutes);
  seconds = timeFormat(seconds);

  let time = hour + " : " + minutes + " : " + seconds + "  " + text;

  message.textContent = time;

  setInterval(startClock, 1000);
}

//   time format function
function timeFormat(value) {
  if (value < 10) {
    value = "0" + value;
  } else {
    value = value;
  }
  return value;
}

try {
  console.log("inside try block");
  console.log(x);
} catch (error) {
  console.log("inside catch blcok");
  console.log(error);
}
