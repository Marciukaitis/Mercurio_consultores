function shiftActiveLink(event) {
  const navbar = document.getElementById("navbar")
  console.log(navbar)
  navbar.querySelector(".active").classList.remove("active")

  const clickedLink = event.target.classList.add("active")
}

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

const navLinks = document.querySelectorAll(".navbar a")
navLinks.forEach(link => link.addEventListener("click", shiftActiveLink))
