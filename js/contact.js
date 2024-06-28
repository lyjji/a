let cvisual = document.querySelector("#visual");
let conus = document.querySelector("#conus");
let con2 = document.querySelector("#con2");

window.addEventListener(
  "scroll",
  () => {
    let sc = document.documentElement.scrollTop;

    let cvih = cvisual.offsetTop;

    if (cvih < sc) {
      conus.classList.add("scon");
    } else {
      conus.classList.remove("scon");
    }

    let con2T = cvih + 500;

    if (con2T < sc) {
      con2.classList.add("scon");
    } else {
      con2.classList.remove("scon");
    }
  },
  { passive: true }
);
