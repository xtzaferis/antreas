const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 70);
});
