// header 스크롤 다운

let head = document.querySelector("header");
let mbar = document.querySelector("#mbar");
let visual = document.querySelector("#visual");

window.addEventListener("scroll", () => {
  let sc = document.documentElement.scrollTop;
  //   console.log(sc);  현재 스크롤 위치

  let hScon = visual.offsetTop;
  //   console.log(hScon);  visual 위 위치

  if (hScon < sc) {
    head.classList.add("scdown");
    mbar.classList.add("scdown");
  } else {
    head.classList.remove("scdown");
    mbar.classList.remove("scdown");
  }
});

// mbar
let mbutton = document.querySelector("header button");

let mbopen = document.querySelector(".mop");
let mbclose = document.querySelector(".mcl");

mbopen.addEventListener("click", () => {
  mbutton.classList.add("on");
  mbar.classList.add("on");
});

mbclose.addEventListener("click", () => {
  mbutton.classList.remove("on");
  mbar.classList.remove("on");
});

// width 768px 초과일 때 mbar에 .on 지우기
const checkw = () => {
  if (window.innerWidth >= 768) {
    mbutton.classList.remove("on");
    mbar.classList.remove("on");
  }
};

// 화면 로드/크기 변경 시 실행
window.addEventListener("DOMContentLoaded", checkw);
window.addEventListener("resize", checkw);

// visual
let slide = document.querySelectorAll("#visual li");

let pageT = slide.length;
let p = 0;

let timer = setInterval(() => {
  if (p == pageT - 1) {
    p = 0;
  } else {
    p++;
  }

  for (i of slide) {
    i.classList.remove("on");
  }

  slide[p].classList.add("on");
}, 2500);

//brand img hover

let brand = document.querySelectorAll("#brand ul li");
let bI = document.querySelectorAll(".bImg");

bI.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    brand[index].classList.add("on");
  });

  item.addEventListener("mouseleave", () => {
    brand[index].classList.remove("on");
  });
});

// new page button

let newB = document.querySelectorAll(".nbox li");
let npre = document.querySelector(".npre");
let next = document.querySelector(".nnext");

let np = 0;

let non = () => {
  if (np >= 1) {
    np = 0;
  } else {
    np++;
  }

  for (i of newB) {
    i.classList.remove("on");
  }
  newB[np].classList.add("on");
};

let nstart = () => {
  timer2 = setInterval(() => {
    non();
  }, 3000);
};

let timer2 = setInterval(() => {
  non();
}, 3000);

// nnavi
npre.addEventListener("click", () => {
  clearInterval(timer2);

  if (np <= 0) {
    np = 1;
  } else {
    np--;
  }

  for (i of newB) {
    i.classList.remove("on");
  }
  newB[np].classList.add("on");

  nstart();
});

next.addEventListener("click", () => {
  clearInterval(timer2);

  non();

  nstart();
});

//notice rolling dcc
let rollW = document.querySelector(".rolling");
let roll = document.querySelector(".roll");

//roll 복제
let rclone = roll.cloneNode(true);
rollW.appendChild(rclone);

roll.id = "rol1";
rclone.id = "rol2";
