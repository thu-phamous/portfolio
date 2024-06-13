document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("#section1, #section2, #section3");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
});
