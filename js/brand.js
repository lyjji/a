let bvisual = document.querySelector("#visual");
let wcider = document.querySelector("#wcider");
let dcco = document.querySelector("#dcco");
let dccoimg = document.querySelector(".dcimg");
let dclogo = document.querySelector(".logos");
let hte = document.querySelector("#hte");
let hfood = document.querySelector("#hte >h3");

window.addEventListener("scroll", () => {
  //현재 위치
  let sc = document.documentElement.scrollTop;
  //console.log(sc)

  //wcider on
  let vhalf = bvisual.offsetTop / 2;
  let dccoT = dcco.offsetTop;

  if (vhalf <= sc && sc < dccoT) {
    wcider.classList.add("scon");
  } else {
    wcider.classList.remove("scon");
  }

  let whalf = wcider.offsetTop / 2;
  let dclogoT = dclogo.offsetTop;
  let dcimgT = dccoimg.offsetTop;
  let hteT = hte.offsetTop;

  if (whalf <= sc && sc < dcimgT) {
    dcco.classList.add("scon");
  } else {
    dcco.classList.remove("scon");
  }

  if (dclogoT <= sc && sc < hteT) {
    dcco.classList.add("scon2");
  } else {
    dcco.classList.remove("scon2");
  }

  let foodT = hfood.offsetTop;

  if (dcimgT <= sc && sc < foodT) {
    hte.classList.add("scon");
  } else {
    hte.classList.remove("scon");
  }
});
