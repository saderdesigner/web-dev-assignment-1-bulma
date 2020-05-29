//my nav
const navSlide = () =>{
  const burgur = document.querySelector('.nav-burgur');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burgur.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      console.log(link);
      if  (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5+ 0.3}s`;
      }
  });
    
    
  });

}

navSlide();





// //navbar
// $(document).ready(function () {

//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function () {

//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       $(".navbar-burger").toggleClass("is-active");
//       $(".navbar-menu").toggleClass("is-active");

//     });
//   });

//carousel
$(document).ready(function(){
    $("#top-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        lazyLoad:false
    });
  });
$(document).ready(function(){
    $("#top-other-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:2,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        lazyLoad:false,
        slideBy:2,
    });
  });
$(document).ready(function(){
    $("#dragon-items").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:4,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        lazyLoad:false,
        slideBy:1,
        
    });
  });


//Model IMG---------------------------------------------------
var modal = document.getElementById("myModal");


var img_1 = document.getElementById("iso-1");
var img_2 = document.getElementById("iso-2");
var img_3 = document.getElementById("iso-3");
var img_4 = document.getElementById("iso-4");
var img_5 = document.getElementById("iso-5");
var img_6 = document.getElementById("iso-6");
var img_7 = document.getElementById("iso-7");
var img_8 = document.getElementById("iso-8");
var img_9 = document.getElementById("iso-9");
var modalImg = document.getElementById("img01");
img_1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}



// SmoothScroll----------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});




// Stick memu-------------------------------------------------
window.onscroll = function() {smoothScroll()};

var navbar = document.getElementById("menu-option");
var sticky = navbar.offsetTop;

function smoothScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Tabs---------------------------------------



function regionTabs(cityName) {
  var i;
  var x = document.getElementsByClassName("region");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
  removeActive();
  addActive(cityName+"-tab");
}
function productTabs(product) {
  var i;
  var x = document.getElementsByClassName("products");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(product).style.display = "block";
  removeActive();
  addActive(product+"-tab");
}


function removeActive() {
  $("li").each(function () {
      $(this).removeClass("is-active");
  });
}
function addActive(id){
     $("#"+id).addClass("is-active");
};


