let head = document.querySelector("header");
let mbar = document.querySelector("#mbar");
let visual = document.querySelector("#visual");

// 스크롤 다운 시
window.addEventListener(
  "scroll",
  () => {
    //  현재 스크롤 위치
    let sc = document.documentElement.scrollTop;
    // console.log(sc);

    // 스크롤 다운 헤더
    let vScon = visual.offsetTop;

    if (vScon < sc) {
      head.classList.add("scdown");
      mbar.classList.add("scdown");
    } else {
      head.classList.remove("scdown");
      mbar.classList.remove("scdown");
    }
  },
  { passive: true }
);

// width 768px 초과일 때 mbar에 .on 지우기
const checkw = () => {
  if (window.innerWidth > 768) {
    mbutton.classList.remove("on");
    mbar.classList.remove("on");
  }
};

// 창 크기 변경시 스크롤 0 + 너비 체크
let scTop = () => {
  document.documentElement.scrollTop = 0;
};

window.addEventListener("beforeunload", scTop);
window.addEventListener("resize", scTop);
window.addEventListener("resize", checkw);

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

// visual

// footer
let adrop = document.querySelector(".adrp h4");
let addr = document.querySelector(".adrp");

adrop.addEventListener("click", () => {
  addr.classList.toggle("on");
});
