const w = document.querySelectorAll(".btn-q");
const e = document.querySelector(".q");

e.style.cssText =
  "display: flex; visibility: hidden; opacity: 0; transition: opacity 3s ease";

const closeQ = (event) => {
  const targetQ = event.target;

  if (targetQ === e || targetQ.closest(".qqq")) {
    e.style.opacity = 0;
    e.style.visibility = "hidden";
  }
};

const openQ = () => {
  e.style.visibility = "visible";
  e.style.opacity = 1;
};

w.forEach((btnqq) => {
  btnqq.addEventListener("click", openQ);
});

e.addEventListener("click", closeQ);
