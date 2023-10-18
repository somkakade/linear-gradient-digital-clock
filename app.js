let get = setInterval(clock, 1000);

function clock() {
  let date = new Date();
  let dateClock = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = dateClock;
}
