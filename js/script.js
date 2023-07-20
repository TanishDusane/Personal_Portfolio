// Toggle icon navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Scroll Section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // Active navbar link
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky Header
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar when clicked on navbar links 
       
        menuicon.classList.remove('bx-x');
        navbar.classList.remove('active');

}


