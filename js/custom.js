let brands = document.querySelector("#brand");
let brand = document.querySelectorAll("#brand ul li");
let news = document.querySelector("#new");
let best = document.querySelector("#best");

// 스크롤 다운 시
window.addEventListener("scroll", () => {
  //  현재 스크롤 위치
  let sc = document.documentElement.scrollTop;
  // console.log(sc);

  //브랜드 transition
  let vScon = visual.offsetTop;
  let bIs = document.querySelectorAll(".bImg");

  const bIh0 = bIs[0].clientHeight;

  let bsScon = brands.offsetTop - bIh0 / 2;
  let b1Scon = brand[0].offsetTop;
  let b2Scon = brand[1].offsetTop - bIh0 / 3;
  let nScon = news.offsetTop;

  if (vScon <= sc && sc <= nScon) {
    if (bsScon <= sc && sc < b1Scon + bIh0 / 3) {
      brand[0].classList.add("scon");
    }
    if (b1Scon <= sc && sc < b2Scon + bIh0 / 3) {
      brand[1].classList.add("scon");
    }
    if (b2Scon <= sc) {
      brand[2].classList.add("scon");
    }
  } else {
    for (i of brand) {
      i.classList.remove("scon");
    }
  }

  // 베스트 transition

  let bests = best.offsetTop - 550;
  if (sc >= bests) {
    best.classList.add("scon");
  } else {
    best.classList.remove("scon");
  }
});

// index-visual
let slide = document.querySelectorAll(".vi li");
let snav = document.querySelectorAll(".vinav li");

let pageT = slide.length;
let p = 0;

let son = () => {
  for (i of slide) {
    i.classList.remove("on");
  }

  slide[p].classList.add("on");

  for (i of snav) {
    i.classList.remove("on");
  }

  snav[p].classList.add("on");
};

let sstart = () => {
  timer = setInterval(() => {
    if (p == pageT - 1) {
      p = 0;
    } else {
      p++;
    }

    son();
  }, 2500);
};

let timer = setInterval(() => {
  if (p == pageT - 1) {
    p = 0;
  } else {
    p++;
  }

  son();
}, 2500);

snav.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(timer);

    p = index;
    son();

    sstart();
  });
});

//brand 이미지 hover

brand = document.querySelectorAll("#brand ul li");

bIs = document.querySelectorAll(".bImg");

bIs.forEach((item, index) => {
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
