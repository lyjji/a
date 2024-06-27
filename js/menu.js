// mnavi 버튼
let mnavi = document.querySelectorAll(".mnavi li");
let menulist = document.querySelectorAll(".menulist");

let menutitle = document.querySelector("#menus h3");
let menucontent = document.querySelector("#menus > p");

mnavi.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (i of mnavi) {
      i.classList.remove("on");
    }

    item.classList.add("on");

    // 메뉴 제목 바꾸기
    let changetitle = "";

    if (index == 1) {
      changetitle = "Year Round";
    } else if (index == 2) {
      changetitle = "Seasonal";
    } else {
      changetitle = "수상한 사이더";
    }

    menutitle.innerText = changetitle;

    // 메뉴 소개
    let changecontent = "";

    if (index == 1) {
      changecontent = "한 해 동안 내내 맛볼 수 있는 애플사이더";
    } else if (index == 2) {
      changecontent =
        "제철 과일을 사용해 시즌에만 맛 볼 수 있는 시즌 한정 사이더";
    } else {
      changecontent =
        "영국, 미시건, 뉴욕 3개 해외 사이더 품평회에서 상 받은 애플 사이더 모음";
    }

    menucontent.innerText = changecontent;

    for (i of menulist) {
      i.classList.remove("on");
    }

    menulist[index].classList.add("on");
  });
});

// 스크롤
let mpack = document.querySelector("#mpack");
let mpbanner = document.querySelector(".packbanner");
let mpacks = document.querySelector(".mpacks");
let mmerch = document.querySelector("#mmerch");

window.addEventListener("scroll", () => {
  //   현재 위치
  let sc = document.documentElement.scrollTop;

  //   pack 배너
  let packT = mpack.offsetTop - 200;
  let pbannerT = mpbanner.offsetTop;
  let merchT = mmerch.offsetTop;

  if (packT <= sc && sc < merchT) {
    mpack.classList.add("scon");
    // mmerch.classList.add("scon");
  } else {
    mpack.classList.remove("scon");
    // mmerch.classList.remove("scon");
  }

  if (pbannerT < sc) {
    mmerch.classList.add("scon");
  } else {
    mmerch.classList.remove("scon");
  }
});
