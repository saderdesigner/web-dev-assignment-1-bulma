//navbar
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });
  });

//carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
var captionText = document.getElementById("caption");
img_1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img_9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
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
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu-option");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


