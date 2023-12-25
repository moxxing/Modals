secondModalController = ({ modal, btnOpen, btnClose }) => {
  const w = document.querySelectorAll(btnOpen);
  const e = document.querySelector(modal);

  e.style.cssText =
    "display: flex; visibility: hidden; opacity: 0; transition: opacity 3s ease";

  const closeQ = (event) => {
    const targetQ = event.target;

    if (targetQ === e || targetQ.closest(btnClose)) {
      e.style.opacity = 0;
      setTimeout(() => {
        e.style.visibility = "hidden";
      }, 1000);
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
};

secondModalController({
  modal: ".q",
  btnOpen: ".btn-q",
  btnClose: ".qqq",
});
