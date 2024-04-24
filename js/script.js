function shiftActiveLink(event) {
  const navbar = document.getElementById("navbar")
  console.log(navbar)
  navbar.querySelector(".active").classList.remove("active")

  const clickedLink = event.target.classList.add("active")
}

const navLinks = document.querySelectorAll(".navbar a")
const sections = document.querySelectorAll("section");
// navLinks.forEach(link => link.addEventListener("click", shiftActiveLink))

window.addEventListener('scroll', function () {
   let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active')
      })
    }
  })

  if (top > 20) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }


});

