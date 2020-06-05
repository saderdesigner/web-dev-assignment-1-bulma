//my nav
const navSlide = () => {
  const burgur = document.querySelector('.nav-burgur');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burgur.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
      }
    });
    //Burgur Animation
    burgur.classList.toggle('toggle');


  });

}

navSlide();

//scroll indicatior
window.onscroll = function () { indicatior() };

function indicatior() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}






//carousel
$(document).ready(function () {
  $("#top-carousel").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    lazyLoad: false
  });
});
$(document).ready(function () {
  $("#top-other-carousel").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 2,
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    lazyLoad: false,
    slideBy: 2,
  });
});
$(document).ready(function () {
  $("#dragon-items").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1023: {
        items: 4,
      },
    },
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    lazyLoad: false,
    slideBy: 1,

  });
});
$(document).ready(function () {
  $("#relate-items").owlCarousel({
    animateOut: 'bounceOutLeft',
    animateIn: 'bounceInRight',
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      767: {
        items: 3,
        dots: true,
      },
      1023: {
        items: 4,
        dots: true,
      },
    },
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    lazyLoad: false,
    slideBy: 1,

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
img_1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img_9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
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
window.onscroll = function () { smoothScroll(); indicatior() };

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
  addActive(cityName + "-tab");
}
function productTabs(product) {
  var i;
  var x = document.getElementsByClassName("products");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (product == 'all') {
    document.getElementById('laptop').style.display = "block";
    document.getElementById('case').style.display = "block";
    document.getElementById('motherboard').style.display = "block";
    document.getElementById('other').style.display = "block";
  }
  else
    document.getElementById(product).style.display = "block";
  removeActive();
  addActive(product + "-tab");
}


function removeActive() {
  $("li").each(function () {
    $(this).removeClass("is-active");
  });
}
function addActive(id) {
  $("#" + id).addClass("is-active");
};



//----------------------------------items gallery
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
};




