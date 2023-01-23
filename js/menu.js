var mobileMenu = document.querySelector(".mobile-menu");
var navList = document.querySelector(".list");
var navLinks = document.querySelectorAll(".list li");
var activeClass = "active";
var activeScroll = true;
this.handleClick = this.handleClick.bind(this);

function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
}

function handleClick() {
  if (activeScroll == true){
    document.querySelector("body").style.overflowY = "hidden";
    activeScroll = false;
  } else{
    document.querySelector("body").style.overflowY = "visible";
    activeScroll = true
  }

  navList.classList.toggle(activeClass);
  mobileMenu.classList.toggle(activeClass);
  animateLinks();
}

function clickLink() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.toggle(activeClass);
      mobileMenu.classList.toggle(activeClass);
      animateLinks();
      
      document.querySelector("body").style.overflowY = "visible";
      activeScroll = true
    })
  })
} 

function addClickEvent() {
    mobileMenu.addEventListener("click", handleClick);
    clickLink()
  }

const init = () => {
    if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
}  

init();