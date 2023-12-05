const modalBtnElems = document.querySelectorAll(".btn-open");
const modalElem = document.querySelector(".modalBackground");

modalElem.style.cssText =
  "display: flex; visibility: hidden; opacity: 0; transition: opacity 1000ms ease;";

const closeModal = (event) => {
  const target = event.target;

  if (target === modalElem || target.closest(".modalBtn")) {
    modalElem.style.opacity = 0;
    setTimeout(() => {
      modalElem.style.visibility = "hidden";
    }, 300);
  }
};

const openModal = () => {
  modalElem.style.visibility = "visible";
  modalElem.style.opacity = 1;
};

modalBtnElems.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
modalElem.addEventListener("click", closeModal);
