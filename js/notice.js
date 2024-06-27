let nvisual = document.querySelector("#visual");
let notice = document.querySelector("#notices");
let events = document.querySelector("#event");

window.addEventListener("scroll", () => {
  // 현재 스크롤 위치
  let sc = document.documentElement.scrollTop;
  // console.log(sc);

  let nviT = nvisual.offsetTop / 2;

  if (nviT < sc) {
    notice.classList.add("scon");
  } else {
    notice.classList.remove("scon");
  }

  let eventT = events.offsetTop - 650;
  // console.log(eventT);

  if (eventT < sc) {
    events.classList.add("scon");
  } else {
    events.classList.remove("scon");
  }
});
