const header = document.querySelector(".header");

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".header__nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

{/* <div class="header">
<h3 class="header__logo">bhromaon</h3>
<ul class="navlist">
  <li><a href="#who-we" class="header__nav-text">Who We Are</a></li>
  <li><a href="#what-we" class="header__nav-text">What We Do</a></li>
  <li>
    <a href="#travel-us" class="header__nav-text">Travel With Us</a>
  </li>
  <li><a href="#contact-us" class="header__nav-text">Contact Us</a></li>
</ul>
<div class="nav-icons">
  <div class="bx bx-menu" id="menu-icon"></div>
</div>
</div> */}