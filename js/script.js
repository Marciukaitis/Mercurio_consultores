window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
