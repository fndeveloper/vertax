

window.addEventListener("scroll", function () {
  var navunder = document.getElementById("navunder");
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollableHeight) * 98;
  if (scrollProgress > 95) {
    document.getElementById("topbtn").innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
}
  else {
    this.document.getElementById("topbtn").innerHTML = scrollProgress.toFixed(0) + "%";

  }
  navunder.style.width = `${scrollProgress}vw`
  var navbar = document.getElementById("navbar");
  var navbar1 = document.getElementById("navbar1");
  var iconf = document.querySelectorAll(".btn-red");
  const logo = document.querySelector(".logo_nb"); 

  var navlinkd = this.document.querySelectorAll(".nav-item>.nav-link")

 
  if (window.scrollY > 700) {
    navbar.classList.add("navfix");

    iconf.forEach((e) => {
      e.classList.add("icon-fixeds");
    });

    logo.classList.add("logo_nb_col");
   
    navlinkd.forEach((e) => {
      e.classList.add("nav-sec-col");
    });
  } 
   else {
    logo.classList.remove("logo_nb_col"); 
    logo.classList.add("text_white"); 

    iconf.forEach((e) => {
      e.classList.remove("icon-fixeds")
    })
    navbar.classList.remove("navfix");
    navlinkd.forEach((e) => {


      e.classList.remove("nav-sec-col")
    })
  }
});

;


// COUNTRY CODE
const inputs = document.querySelectorAll(".phonenum");

inputs.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // For formatting
  });
});
// COUNTRY CODE

// ACCORDIAN
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ACCORDIAN

// MARQUEE START

// MARQUEE END

// SWIPER HOME JS 
// Get elements
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Responsive for mobile/tablet
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});
// SWIPER HOME JS 

document.addEventListener("DOMContentLoaded", () => {
//  SERVICE NAVBAR START
  let serviceNavLink = document.getElementById("service_nav_link");

  serviceNavLink.addEventListener("click", () => {
      let offcanvasMain = new bootstrap.Offcanvas(document.getElementById("offcanvasMain"));
      let offcanvasService = new bootstrap.Offcanvas(document.getElementById("offcanvasService"));

      offcanvasMain.hide();
      offcanvasService.show();
  });
//  SERVICE NAVBAR END
//  AI SERVICE NAVBAR START
//  AI SERVICE NAVBAR START



});





