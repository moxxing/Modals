const w = document.querySelector(".btn-q");
const e = document.querySelector(".q");

e.style.cssText =
  "display: flex; visibility: hidden; opacity: 0; transition: opacity 3s ease";

const closeQ = (event) => {
  const targetQ = event.target;

  if (targetQ === e) {
    e.style.opacity = 0;
    e.style.visibility = "hidden";
  }
};

const openQ = () => {
  e.style.visibility = "visible";
  e.style.opacity = 1;
};
