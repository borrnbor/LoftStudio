//Nav Icon//
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = () => {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
};

/*Phone mask*/
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((elem) => {
  elem.addEventListener('input', () => {
    if (elem.value == '+') {
      elem.value = '';
    }
  });
  elem.addEventListener('blur', () => {
    if (elem.value == '+') {
      elem.value = '';
    }
  });
});
