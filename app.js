const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav=  document.querySelector('.nav-links');
  const navLinks= document.querySelectorAll('.nav-links li');
  const bodyOverflow= document.querySelector('body');

  hamburger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');
    bodyOverflow.classList.toggle('bodyOverflow');

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation='';
      }  else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
    }
    });

    hamburger.classList.toggle('toggle');
  });
}

navSlide();
