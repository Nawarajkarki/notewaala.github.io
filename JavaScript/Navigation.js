const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-left ");
  const navLinks = document.querySelectorAll(".nav-left div a");
  const signin = document.querySelectorAll(".nav-right .signin .login");
  // toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  // animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 2s ease forwards ${index / 6}s`;
    console.log(index / 7);
  });
//   signin.forEach((link, index) => {
//     link.style.animation = `navLinkFade 2s ease forwards $ {index / 6}s`;
//     console.log(index / 7);
//   });
};

navSlide();
