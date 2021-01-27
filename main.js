$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
  });
});

function openNav() {
  hamburger.classList.add('is-active');
  document.getElementById('toggle').style.opacity = '0';
}

function closeNav() {
  hamburger.classList.remove('is-active');
  document.getElementById('toggle').style.opacity = '1';
}
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('is-active') ? openNav() : closeNav();
});
